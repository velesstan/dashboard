import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Category } from './interfaces';

export const categoriesApi = createApi({
    reducerPath: 'categories-api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
    endpoints: builder => ({
        getCategories: builder.query<Category[], void>({
            query: () => `/api/categories`,
        }),
    }),
});

export const { useGetCategoriesQuery } = categoriesApi;
