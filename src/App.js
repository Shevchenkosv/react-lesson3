
import React from "react";

import './Index.css';
import { Routes, Route } from 'react-router-dom';
import ChatsPage from './pages/ChatsPage';
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./pages/Layout";
import SinglePage from "./pages/SinglePage";



function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chats" element={<ChatsPage />} />
          <Route path="/chats/:chatId" element={< SinglePage />} />
          <Route path="*" element={< NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App;