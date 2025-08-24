import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchAllProducts = async (query = {}) => {
    if (typeof query === 'string') {
        const url = `/campers${query.startsWith('?') ? query : `?${query}`}`;
        const { data } = await axios.get(url);
        return data;
    }
    const { data } = await axios.get('/campers', { params: query });
    return data;
};

export const fetchProductById = async (id) => {
    const response = await axios.get(`/campers/${id}`);
    return response.data;
};
