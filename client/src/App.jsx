import React, { useEffect } from "react";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthUserAction } from "./components/store/auth/auth.slice";
import { Skeleton } from "./components/ui/skeleton";
import CheckAuth from "./components/helper/CheckAuth";

const App = () => {
  const { isAuthenticated, isLoading, user } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthUserAction());

    if (isLoading) {
      return <Skeleton className="w-[600px] h-[600px] rounded-full" />;
    }
  }, [isLoading, dispatch]);

  return (
    <Routes>
      <Route
        path="/auth"
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }
      >
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default App;
