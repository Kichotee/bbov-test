import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa6";
import ControlledOutlineInput from "@/shared/Input/controlledOutlineInput";
import { login } from "../store/userSlice";
import Button from "@/shared/Buttons/Button";
// import Alert from "@/shared/Alert.tsx/Alert";
import CircularProgress from "@/shared/circular-progress";
import { loginResolver } from "../validation";
// import { AnyAction } from "@reduxjs/toolkit";

type ILoginPayload = {
  email: string;
  password: string;
};

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ILoginPayload>({
    defaultValues: { email: "", password: "" },
    resolver: loginResolver,
  });
  const onSubmit = async (payload: ILoginPayload) => {
    // return payload
    // console.log(payload)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = await dispatch(login(payload) as any);
    if (res.payload.data.status === 200) {
      navigate("/auth/");
    }
  };
  return (
    <div className="bg-[#4c3b58] min-h-screen flex flex-col justify-center items-center">
      {/* {errors && <Alert severity="error" message="Invalid Credentials"/>}
      {isSubmitSuccessful && <Alert severity="success" message=""/>} */}
      <div className="rounded-md mb-4">
        <img src="/qataloog-white.png" alt="" className="w-1/4 md:w-[12rem]" />
      </div>
      <div className="bg-white min-w-[35%] py-12 rounded-xl">
        <div className="px-12 flex flex-col gap-4">
          <ControlledOutlineInput<ILoginPayload>
            control={control}
            placeholder="Enter email"
            name="email"
            type="email"
            required
            startAdornment={<FaEnvelope className="text-text-sub" />}
            className="py-3"
            errors={errors}
            fullWidth
          />
          <ControlledOutlineInput<ILoginPayload>
            control={control}
            placeholder="Enter password"
            name="password"
            type="password"
            required
            startAdornment={<FaLock className="text-text-sub" />}
            errors={errors}
            className="py-3"
            fullWidth
          />

          <div className="flex gap-4">
            <input type="checkbox" />
            <p className="text-text-sub">Remember me</p>
          </div>
          <Button
            themeColor="main"
            variant="contained"
            className="w-full py-4 flex justify-center items-center"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            {isSubmitting ? <CircularProgress size={24} color="white" /> : "Submit"}
          </Button>

          <small className="text-center text-sm">
            Dont have an account <br />
            <Link className="text-brand-primary text-center" to="/signup">
              Create One
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};
