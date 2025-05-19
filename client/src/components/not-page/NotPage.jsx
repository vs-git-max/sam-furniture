import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const NotPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-5  bg-green-900">
      <h1 className="font-bold text-center text-3xl md:text-5xl text-red-600">
        Page not found
      </h1>
      <p className="font-bold  text-yellow-600">
        Click the button to go to the home page
      </p>
      <div className="text-center">
        <Button
          className="px-4 py-3 rounded-md cursor-pointer bg-yellow-600"
          onClick={() => navigate("/shop/home")}
        >
          Click here
        </Button>
      </div>
    </div>
  );
};

export default NotPage;
