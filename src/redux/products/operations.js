// src/redux/products/operations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllProducts } from '../../utils/api';
import { clearProducts } from './slice';

const buildQuery = (filter) => {
    const p = new URLSearchParams();

    p.append("page", String(filter.page || 1));
    p.append("limit", String(filter.perPage || 4));

    if (filter.location) p.append("location", filter.location);

    if (filter.type) p.append("form", filter.type);

    if (Array.isArray(filter.equipment)) {
        filter.equipment.forEach(tok => {
        if (!tok) return;
        if (tok.includes("=")) {
            const [k, v] = tok.split("=");
            if (k && v) p.append(k, v);
        } else {
            p.append(tok, "true");
        }
        });
    }

    return `?${p.toString()}`;
};

export const loadProducts = createAsyncThunk(
    'products/load',
    async (_, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    const filter = { ...state.products.filter };
    const { page } = filter;
    const { perPage, ...queryParams } = filter;

    if (page === 1) dispatch(clearProducts());

    try {
        const data = await fetchAllProducts(queryParams);

        const paginatedItems = data.items.slice(
            (page - 1) * perPage,
            (page - 1) * perPage + perPage
        );

        data.items = paginatedItems;

        return data;
        } catch {
            console.log('Error caught in operations...');
            return rejectWithValue('');
        }
    }
);
