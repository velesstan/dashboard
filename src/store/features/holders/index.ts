import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'config';
import type { Holder } from 'interfaces';

export const holdersApi = createApi({
    reducerPath: 'holders-api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/holders`,
    }),
    endpoints: builder => ({
        getHolders: builder.query<Holder[], void>({
            query: () => `/`,
        }),
    }),
});

export const { useGetHoldersQuery } = holdersApi;
