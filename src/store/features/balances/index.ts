import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'config';
import type { Balance } from 'interfaces';

export const balancesApi = createApi({
    reducerPath: 'balances-api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/balances`,
    }),
    endpoints: builder => ({
        getBalances: builder.query<Balance[], void>({
            query: () => `/`,
        }),
    }),
});

export const { useGetBalancesQuery } = balancesApi;
