import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'config';

import { Product } from './interfaces';

export const productsApi = createApi({
    reducerPath: 'products-api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/products`,
    }),
    endpoints: builder => ({
        getProducts: builder.query<Product[], void>({
            query: () => `/`,
        }),
    }),
});

export const { useGetProductsQuery } = productsApi;
