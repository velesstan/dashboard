import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'config';
import type { Balance } from 'interfaces';

export const balancesApi = createApi({
    reducerPath: 'balances-api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/balances`,
    }),
    endpoints: builder => ({
        readBalances: builder.query<Balance[], void>({
            query: () => ({
                url: `/`,
                params: {
                    startDate: '2022-06-23',
                    endDate: '2022-07-23',
                },
            }),
        }),
    }),
});

export const { useReadBalancesQuery } = balancesApi;
