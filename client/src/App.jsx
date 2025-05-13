import React from "react";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/AuthLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default App;
