import { RouteObject, Navigate } from 'react-router';

import { DashboardLayout } from 'components/DashboardLayout';

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
                ],
            },
        ],
    },
];
