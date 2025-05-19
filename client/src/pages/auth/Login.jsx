import Form from "@/components/common/FormControls";
import React, { useState } from "react";
import loginFormControls from "@/components/helper";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserAction } from "@/components/store/auth/auth.slice";
import { toast } from "sonner";
import axios from "axios";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const onSubmit = async (e) => {
    e.preventDefault();
    setFormData(initialState);

    try {
      const result = await dispatch(loginUserAction(formData)).unwrap();
      if (result?.success) {
        toast.success("Login success");
        console.log(result);
        navigate("/shop/home");
      }
    } catch (error) {
      toast.error(`Login failed, ${error}`);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6 bg-yellow-600 py-8 px-6 rounded-2xl shadow-[1px_1px_15px] shadow-black">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-background">
          Login to account.
        </h1>
      </div>
      <Form
        formControls={loginFormControls}
        buttonText={"Login"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
      <p className="mt-2 text-background font-medium text-center">
        Don't have an Account{" "}
        <Link className="font-bold   hover:underline" to="/auth/signup">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;
