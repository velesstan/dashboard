import { RouteObject } from 'react-router';

import { DashboardLayout } from 'components/DashboardLayout';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <DashboardLayout />,
        children: [],
    },
];
