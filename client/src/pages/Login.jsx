import Form from "@/components/common/FormControls";
import React from "react";

const Login = () => {
  return (
    <div className="max-w-md mx-auto flex items-center justify-between h-screen">
      <div className="text-center">
        <h1 className="text-3xl  font-bold tracking-tight text-foreground">
          Login to your account
        </h1>
      </div>
      <Form></Form>
    </div>
  );
};

export default Login;
