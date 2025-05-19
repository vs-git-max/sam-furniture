import React, { useEffect } from "react";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthUserAction } from "./components/store/auth/auth.slice";
import { Skeleton } from "./components/ui/skeleton";
// import CheckAuth from "./components/helper/CheckAuth";
import UnauthPage from "./pages/unauth/UnauthPage";
import NotPage from "./components/not-page/NotPage";
import ShopLayout from "./components/shop/ShopLayout";
import Home from "./pages/shop/Home";

const App = () => {
  const { isAuthenticated, isLoading, user } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthUserAction());
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton className="w-1/2 screen bg-gray-600 rounded-full" />;
  }

  return (
    <Routes>
      <Route path="/shop/home" element={<Home />} replace />

      <Route
        path="/auth"
        element={
          // <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AuthLayout />
          /* </CheckAuth> */
        }
      >
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      <Route
        path="/shop"
        element={<ShopLayout isAuthenticated={isAuthenticated} user={user} />}
      >
        <Route path="home" element={<Home />} />
      </Route>

      <Route path="/unauth-page" element={<UnauthPage />} />
      <Route path="*" element={<NotPage />} />
    </Routes>
  );
};

export default App;
