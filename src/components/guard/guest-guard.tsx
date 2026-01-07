import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/stores';

export const GuestGuard = () => {
    const { isAuthenticated } = useAuthStore();

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};
