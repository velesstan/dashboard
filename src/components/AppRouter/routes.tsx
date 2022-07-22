import { RouteObject, Navigate } from 'react-router';

import { DashboardLayout } from 'components/DashboardLayout';
import { CategoriesList } from 'pages/categories/CategoriesList';
import { ProductsList } from 'pages/products/ProductsList';
import { UsersList } from 'pages/users/UsersList';
import { HoldersList } from 'pages/holders/HoldersList';
import { WaybillsList } from 'pages/waybills/WaybillsList';
import { BalancesList } from 'pages/balances/BalancesList';
import { EditUser } from 'pages/users/EditUser';
import { EditHolder } from 'pages/holders/EditHolder';
import { EditCategory } from 'pages/categories/EditCategory';

export const routes: RouteObject[] = [
    {
        path: '/',
        children: [
            {
                path: '',
                element: <Navigate to={'/dashboard'} />,
            },
            {
                path: 'dashboard',
                element: <DashboardLayout />,
                children: [
                    {
                        path: '',
                        element: <Navigate to='main' />,
                    },
                    {
                        path: 'main',
                        element: null,
                    },
                    {
                        path: 'waybills',
                        children: [
                            {
                                path: '',
                                element: <Navigate to='list' />,
                            },
                            {
                                path: 'list',
                                element: <WaybillsList />,
                            },
                        ],
                    },
                    {
                        path: 'balances',
                        children: [
                            {
                                path: '',
                                element: <Navigate to='list' />,
                            },
                            {
                                path: 'list',
                                element: <BalancesList />,
                            },
                        ],
                    },
                    {
                        path: 'settings',
                        children: [
                            {
                                path: '',
                                element: <Navigate to='categories' />,
                            },
                            {
                                path: 'categories',
                                children: [
                                    {
                                        path: '',
                                        element: <CategoriesList />,
                                    },
                                    {
                                        path: 'create',
                                        element: <EditCategory />,
                                    },
                                    {
                                        path: ':id/edit',
                                        element: <EditCategory />,
                                    },
                                ],
                            },
                            {
                                path: 'products',
                                children: [
                                    {
                                        path: '',
                                        element: <Navigate to='list' />,
                                    },
                                    {
                                        path: 'list',
                                        element: <ProductsList />,
                                    },
                                ],
                            },
                            {
                                path: 'holders',
                                children: [
                                    {
                                        path: '',
                                        element: <HoldersList />,
                                    },
                                    {
                                        path: 'create',
                                        element: <EditHolder />,
                                    },
                                    {
                                        path: ':id/edit',
                                        element: <EditHolder />,
                                    },
                                ],
                            },
                            {
                                path: 'users',
                                children: [
                                    {
                                        path: '',
                                        element: <UsersList />,
                                    },
                                    {
                                        path: 'create',
                                        element: <EditUser />,
                                    },
                                    {
                                        path: ':id/edit',
                                        element: <EditUser />,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
