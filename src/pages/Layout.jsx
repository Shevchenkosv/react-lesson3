import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./pages.css"
const Layout = () => {
    return (
        <>
            <header className="header">
                <NavLink className='navlink' to={'/'}>Дом</NavLink>
                <NavLink className='navlink' to={'/chats'}>Чаты</NavLink>
                <NavLink className='navlink' to={'/profile'}>Профиль</NavLink>



            </header>
            <div className="outlet">
                <Outlet />
            </div>
            <footer className="footer"></footer>
        </>
    );
};

export default Layout;