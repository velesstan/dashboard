import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'config';
import type { Category } from 'interfaces';

export const categoriesApi = createApi({
    reducerPath: 'categories-api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/categories`,
    }),
    endpoints: builder => ({
        getCategories: builder.query<Category[], void>({
            query: () => `/`,
        }),
    }),
});

export const { useGetCategoriesQuery } = categoriesApi;
