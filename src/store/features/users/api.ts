import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'config';

import { User } from './interfaces';

export const usersApi = createApi({
    reducerPath: 'users-api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/users`,
    }),
    endpoints: builder => ({
        getUsers: builder.query<User[], void>({
            query: () => `/`,
        }),
    }),
});

export const { useGetUsersQuery } = usersApi;
