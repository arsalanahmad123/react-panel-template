import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Menu, Bell, User, LogOut } from 'lucide-react';
import { useLogout } from '@/hooks/use-auth';

export const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { mutate: logout } = useLogout();

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 ${
                    sidebarOpen ? 'w-64' : 'w-20'
                }`}
            >
                <div className="p-4 border-b">
                    <h1 className="text-xl font-bold">Admin</h1>
                </div>
                {/* Sidebar menu items */}
            </aside>

            {/* Main Content */}
            <div
                className={`transition-all duration-300 ${
                    sidebarOpen ? 'ml-64' : 'ml-20'
                }`}
            >
                {/* Top Navigation */}
                <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <Menu className="w-6 h-6" />
                    </button>
                    <div className="flex items-center gap-4">
                        <Bell className="w-5 h-5 cursor-pointer" />
                        <User className="w-5 h-5 cursor-pointer" />
                        <button onClick={() => logout()}>
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </nav>

                {/* Page Content */}
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
