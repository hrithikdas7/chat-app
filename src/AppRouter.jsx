import { Routes, Route } from "react-router-dom";
import ChatList from "./Pages/ChatList/ChatList";
import Login from "./Pages/Login/Login";
import ChatWindow from "./Pages/ChatWindow/ChatWIndow";
import ProtectedRoute from "./helpers/ProtectedRoute";


function AppRoutes() {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<Login />} />

      {/* Protected routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <ChatList />
          </ProtectedRoute>
        }
      />

      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <ChatWindow />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
