import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'config';
import type { Role } from 'interfaces';

export const rolesApi = createApi({
    reducerPath: 'roles-api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/roles`,
    }),
    endpoints: builder => ({
        readRoles: builder.query<Role[], void>({
            query: () => `/`,
        }),
    }),
});

export const { useReadRolesQuery } = rolesApi;
