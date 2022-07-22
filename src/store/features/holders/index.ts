import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'config';
import type { Holder } from 'interfaces';

export const holdersApi = createApi({
    reducerPath: 'holders-api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/holders`,
    }),
    tagTypes: ['Holder'],
    endpoints: builder => ({
        createHolder: builder.mutation<Holder, Holder>({
            query: holder => ({
                url: `/`,
                method: 'POST',
                body: holder,
            }),
            invalidatesTags: ['Holder'],
        }),
        readHolders: builder.query<Holder[], void>({
            query: () => `/`,
            providesTags: result =>
                result
                    ? [
                          ...result.map(({ _id }) => ({
                              type: 'Holder' as const,
                              id: _id,
                          })),
                      ]
                    : ['Holder'],
        }),
        updateHolder: builder.mutation<Holder, Partial<Holder>>({
            query: ({ _id, ...update }) => ({
                url: `/${_id}`,
                method: 'PUT',
                body: update,
            }),
            invalidatesTags: (result, error, { _id }) => [
                { type: 'Holder', id: _id },
            ],
        }),
        deleteHolder: builder.mutation<void, string>({
            query: _id => ({
                url: `/${_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Holder', id }],
        }),
    }),
});

export const {
    useCreateHolderMutation,
    useReadHoldersQuery,
    useUpdateHolderMutation,
    useDeleteHolderMutation,
} = holdersApi;
