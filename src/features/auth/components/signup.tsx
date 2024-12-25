/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa6";
import ControlledOutlineInput from "@/shared/Input/controlledOutlineInput";
import { register } from "../store/userSlice";
import Button from "@/shared/Buttons/Button";
import CircularProgress from "@/shared/circular-progress";
import { registerResolver } from "../validation";
// import Alert from "@/shared/Alert.tsx/Alert";
// import { AnyAction } from "@reduxjs/toolkit";

type IRegisterPayload = {
  email: string;
  name: string;
  password: string;
  checkbox: boolean;
};

export const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<IRegisterPayload>({
    defaultValues: { email: "", password: "" },
    resolver: registerResolver,
  });
  const onSubmit = async (payload: IRegisterPayload) => {
    const body = {
      name: payload.name,
      email: payload.email,
      password: payload.email,
    };
    const res = await dispatch(register(body) as any);
    if (res.payload.data.status === 200) {
      navigate("/signup-successful");
    }
  };
  return (
    <div className="bg-[#4c3b58] min-h-screen flex flex-col justify-center items-center">
      {/* {errors && <Alert severity="error" message="Invalid Credentials"/>}
      {isSubmitSuccessful && <Alert severity="success" message=""/>} */}
      <div className=" mb-4">
        <img src="/qataloog-white.png" className="w-1/4 md:w-[12rem]" alt="" />
      </div>
      <div className="bg-white min-w-[35%] py-8 rounded-xl">
        <div className="px-12 flex flex-col gap-4">
          <ControlledOutlineInput<IRegisterPayload>
            control={control}
            placeholder="Enter Full name"
            name="name"
            type="text"
            startAdornment={<FaUser className="text-text-sub" />}
            className="py-3"
            errors={errors}
            fullWidth
          />
          <ControlledOutlineInput<IRegisterPayload>
            control={control}
            placeholder="Enter email"
            name="email"
            type="email"
            startAdornment={<FaEnvelope className="text-text-sub" />}
            className="py-3"
            errors={errors}
            fullWidth
          />
          <ControlledOutlineInput<IRegisterPayload>
            control={control}
            placeholder="Enter password"
            name="password"
            type="password"
            startAdornment={<FaLock className="text-text-sub" />}
            errors={errors}
            className="py-3"
            fullWidth
          />
          <Link to="/terms" className="text-brand-primary text-sm">
            Read our Terms and Conditions here
          </Link>
          <div className="flex items-center gap-4">
            <ControlledOutlineInput<IRegisterPayload>
              control={control}
              label=""
              name="checkbox"
              type="checkbox"
              errors={errors}
              fullWidth
            />
            {!errors.checkbox && <p>Have you read terms and condition?</p>}
          </div>
          <Button
            themeColor="main"
            variant="contained"
            className="w-full py-4 flex justify-center items-center"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            {isSubmitting ? <CircularProgress size={24} color="white" /> : "Sign in"}
          </Button>

          <small className="text-center text-sm">
            Have an account?
            <Link className="text-brand-primary text-center" to="/login">
              {" "}
              Login
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};
