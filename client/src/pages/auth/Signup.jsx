import Form from "@/components/common/FormControls";
import React, { useState } from "react";
import { signupFormControls } from "@/components/helper";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupUserAction } from "@/components/store/auth/auth.slice";
import { toast } from "sonner";

const Signup = () => {
  const navigate = useNavigate();
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState);
  const onSubmit = (e) => {
    e.preventDefault();

    setFormData(initialState);

    dispatch(signupUserAction(formData)).then((result) => {
      if (result?.payload?.success) {
        toast(result?.payload?.message);
        navigate("/auth/login");
      } else {
        toast(
          <p className="font-bold text-red-500 text-lg ">
            {result?.payload?.message || " Error, something happened!"}
          </p>
        );
      }
    });
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6 bg-yellow-600 py-8 px-6 rounded-2xl shadow-[1px_1px_15px] shadow-black">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
      </div>
      <Form
        formControls={signupFormControls}
        buttonText={"Signup"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
      <p className="mt-2 text-center font-medium">
        Don't have an Account{" "}
        <Link
          className="font-bold text-background hover:underline"
          to="/auth/login"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
