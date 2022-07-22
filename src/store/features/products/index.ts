import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'config';
import type { Product } from 'interfaces';

export const productsApi = createApi({
    reducerPath: 'products-api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/products`,
    }),
    tagTypes: ['Product'],
    endpoints: builder => ({
        createProduct: builder.mutation<Product, Product>({
            query: product => ({
                url: '/',
                method: 'POST',
                body: product,
            }),
            invalidatesTags: ['Product'],
        }),
        getProducts: builder.query<Product[], void>({
            query: () => `/`,
            providesTags: ['Product'],
        }),
        deleteProduct: builder.mutation<void, string>({
            query: id => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Product'],
        }),
        updateProduct: builder.mutation<Product, Partial<Product>>({
            query: ({ _id, ...update }) => ({
                url: `/${_id}`,
                method: 'PUT',
                body: update,
            }),
            invalidatesTags: ['Product'],
        }),
    }),
});

export const {
    useGetProductsQuery,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useCreateProductMutation,
} = productsApi;
