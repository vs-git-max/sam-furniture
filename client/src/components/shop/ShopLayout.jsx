import React from "react";
import { Outlet } from "react-router-dom";

const ShopLayout = () => {
  return (
    <div className="bg-green-50 h-screen w-full">
      <Outlet />
    </div>
  );
};

export default ShopLayout;
