import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const UnauthPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/shop/home");
  };
  return (
    <div className="w-full h-screen flex items-center justify-between bg-gray-100">
      <h1 className="font-bold text-center text-3xl md:text-5xl text-red-600">
        Error <br /> This is unauth page.
      </h1>
      <p className="font-bold">Click the button to go to the home page</p>
      <div className="text-center">
        <Button className="px-4 py-3" onClick={() => handleNavigate}>
          Click
        </Button>
      </div>
    </div>
  );
};

export default UnauthPage;
