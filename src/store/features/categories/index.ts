import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'config';
import type { Category } from 'interfaces';

export const categoriesApi = createApi({
    reducerPath: 'categories-api',
    tagTypes: ['Category'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/categories`,
    }),
    endpoints: builder => ({
        createCategory: builder.mutation<Category, Category>({
            query: category => ({
                url: `/`,
                method: 'POST',
                body: category,
            }),
            invalidatesTags: ['Category'],
        }),
        readCategories: builder.query<Category[], void>({
            query: () => `/`,
            providesTags: ['Category'],
        }),
        updateCategory: builder.mutation<Category, Partial<Category>>({
            query: ({ _id, ...update }) => ({
                url: `/${_id}`,
                method: 'PUT',
                body: update,
            }),
            invalidatesTags: ['Category'],
        }),
        deleteCategory: builder.mutation<void, string>({
            query: id => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Category'],
        }),
    }),
});

export const {
    useCreateCategoryMutation,
    useReadCategoriesQuery,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
} = categoriesApi;
