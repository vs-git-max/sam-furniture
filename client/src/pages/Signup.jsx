import Form from "@/components/common/FormControls";
import React, { useState } from "react";
import registerFormControls from "../components/helper/index.js";

const Signup = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = () => {};

  const [formData, setFormData] = useState(initialState);

  return (
    <div className="mx-auto w-full max-w-md mt-12 h-screen ">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create a new account
        </h1>
      </div>
      <Form
        formControls={registerFormControls}
        buttonText={"Signup"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Signup;
