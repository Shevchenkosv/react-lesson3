import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header className="header">
                <NavLink className="Navlink" to={'/'}>Home</NavLink>
                <NavLink className="Navlink" to={'/profile'}>Profile</NavLink>
                <NavLink className="Navlink" to={'/chats'}>Chat</NavLink>

            </header>
            <div className="Outlet">
                <Outlet />
            </div>
            <footer className="footer">footer</footer>
        </>
    );
};

export default Layout;