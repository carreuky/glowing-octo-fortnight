// @/components/layout/Layout.jsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import MenuBarMobile from './MenuBarMobile';

export default function Layout({ children }) {
    const location = useLocation();
    const [showSidebar, setShowSidebar] = useState(false);

    // Check if the current path is the login page
    const isLoginPage = location.pathname === '/login';

    return (
        <div className="min-h-screen flex overflow-hidden">
            {!isLoginPage && (
                <>
                    <MenuBarMobile setter={setShowSidebar} />
                    <Sidebar show={showSidebar} setter={setShowSidebar} />
                </>
            )}
            <div className={`flex-1 overflow-y-auto ${!isLoginPage ? 'md:ml-[250px]' : ''} mt-16 md:mt-2 px-4 py-2 `}>
                {children}
            </div>
        </div>
    );
}
