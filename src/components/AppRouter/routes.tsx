import { RouteObject, Navigate } from 'react-router';

import { DashboardLayout } from 'components/DashboardLayout';
import { CategoriesList } from 'pages/categories/CategoriesList';

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
                        element: null,
                    },
                    {
                        path: 'balances',
                        element: null,
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
                                        element: <Navigate to='list' />,
                                    },
                                    {
                                        path: 'list',
                                        element: <CategoriesList />,
                                    },
                                ],
                            },
                            {
                                path: 'products',
                                element: null,
                            },
                            {
                                path: 'holders',
                                element: null,
                            },
                            {
                                path: 'users',
                                element: null,
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
