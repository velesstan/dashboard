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
        getHolders: builder.query<Holder[], void>({
            query: () => `/`,
            providesTags: ['Holder'],
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
    }),
});

export const { useGetHoldersQuery, useUpdateHolderMutation } = holdersApi;
