import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import { routes } from './routes';

export const AppRouter: React.FC = () => {
    const appRoutes = useRoutes(routes);
    return <Suspense>{appRoutes}</Suspense>;
};

export { ProtectedRoute } from './protected.route';
