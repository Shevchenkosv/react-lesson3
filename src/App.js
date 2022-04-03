import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={< HomePage />} />
        <Route path='/chats' element={<Chat />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
