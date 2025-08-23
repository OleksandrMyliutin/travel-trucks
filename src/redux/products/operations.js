import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllProducts } from '../../utils/api';
import { clearProducts } from './slice';

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