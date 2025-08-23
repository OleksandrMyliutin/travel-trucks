import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllProducts } from '../../utils/api';
import { clearProducts } from './slice';

export const loadProducts = createAsyncThunk(
    'products/load',
    async (_, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    const filter = { ...state.products.filter };
    const { page, perPage } = filter;

    if (page === 1) dispatch(clearProducts());

    try {
        const params = {
            page,
            limit: perPage,
        };

        const data = await fetchAllProducts(params);
        return data;

        } catch (err) {
        console.log('Error caught in operations...', err);
        return rejectWithValue('');
        }
    }
);
