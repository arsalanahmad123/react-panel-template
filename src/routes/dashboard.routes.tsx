import type { RouteObject } from 'react-router-dom';
import { AuthGuard } from '@/components/guard';
import { DashboardLayout } from '@/components/layout';
import DashboardPage from '@/pages/(dashboard)/dashboard';

export const dashboardRoutes: RouteObject[] = [
    {
        element: <AuthGuard />,
        children: [
            {
                element: <DashboardLayout />,
                children: [
                    {
                        path: '/',
                        element: <DashboardPage />,
                    },
                ],
            },
        ],
    },
];
