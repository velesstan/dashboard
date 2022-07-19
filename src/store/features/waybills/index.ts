import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'config';
import type { Waybill } from 'interfaces';

export const waybillsApi = createApi({
    reducerPath: 'waybills-api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/waybills`,
    }),
    endpoints: builder => ({
        getWaybills: builder.query<Waybill[], void>({
            query: () => `/`,
        }),
    }),
});

export const { useGetWaybillsQuery } = waybillsApi;
