import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'config';
import type { Waybill } from 'interfaces';

export const waybillsApi = createApi({
    reducerPath: 'waybills-api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/waybills`,
    }),
    endpoints: builder => ({
        readWaybills: builder.query<Waybill[], void>({
            query: () => ({
                url: `/`,
                params: {
                    startDate: '2022-01-01',
                    endDate: '2022-07-23',
                },
            }),
        }),
    }),
});

export const { useReadWaybillsQuery } = waybillsApi;
