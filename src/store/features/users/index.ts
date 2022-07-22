import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'config';
import type { User } from 'interfaces';

export const usersApi = createApi({
    reducerPath: 'users-api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/users`,
    }),
    tagTypes: ['User'],
    endpoints: builder => ({
        getUsers: builder.query<User[], void>({
            query: () => `/`,
            providesTags: result =>
                result
                    ? [
                          ...result.map(({ _id }) => ({
                              type: 'User' as const,
                              id: _id,
                          })),
                      ]
                    : ['User'],
        }),
        getUser: builder.query<User, string>({
            query: id => `/${id}`,
            providesTags: (result, error, id) => [{ type: 'User', id }],
        }),
        createUser: builder.mutation<User, User>({
            query: user => ({
                url: '/',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['User'],
        }),
        deleteUser: builder.mutation<void, string>({
            query: id => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'User', id: arg },
            ],
        }),
        updateUser: builder.mutation<User, Partial<User>>({
            query: ({ _id, ...update }) => ({
                url: `/${_id}`,
                method: 'PUT',
                body: update,
            }),
            invalidatesTags: (result, error, { _id }) => [
                { type: 'User', id: _id },
            ],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useUpdateUserMutation,
    useGetUserQuery,
    useDeleteUserMutation,
    useCreateUserMutation,
} = usersApi;
