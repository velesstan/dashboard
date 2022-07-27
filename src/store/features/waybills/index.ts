import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'config';
import type { Waybill } from 'interfaces';

export const waybillsApi = createApi({
    reducerPath: 'waybills-api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/waybills`,
    }),
    tagTypes: ['Waybill'],
    endpoints: builder => ({
        createWaybill: builder.mutation<Waybill, Waybill>({
            query: waybill => ({
                url: `/`,
                method: 'POST',
                body: waybill,
            }),
            invalidatesTags: ['Waybill'],
        }),
        readWaybills: builder.query<Waybill[], Record<string, unknown>>({
            query: query => ({
                url: `/`,
                params: query,
            }),
            providesTags: ['Waybill'],
        }),
        updateWaybill: builder.mutation<Waybill, Partial<Waybill>>({
            query: ({ _id, ...update }) => ({
                url: `/${_id}`,
                method: 'PUT',
                body: update,
            }),
            invalidatesTags: ['Waybill'],
        }),
        deleteWaybill: builder.mutation<void, string>({
            query: id => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Waybill'],
        }),
    }),
});

export const {
    useCreateWaybillMutation,
    useReadWaybillsQuery,
    useUpdateWaybillMutation,
    useDeleteWaybillMutation,
} = waybillsApi;
