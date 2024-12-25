/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa6";
// import ControlledOutlineInput from "@/shared/Input/controlledOutlineInput";
// import { login } from "../store/userSlice";
// import Button from "@/shared/Buttons/Button";

// import { AnyAction } from "@reduxjs/toolkit";

type ILoginPayload = {
  email: string;
  password: string;
};

export const SignupSuccess = () => {
  useForm<ILoginPayload>({
    defaultValues: { email: "", password: "" },
    // resolver: loginResolver,
  });
  // const onSubmit = async (payload: ILoginPayload) => {
  //   // return payload
  //   // console.log(payload)
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   const res = await dispatch(login(payload) as any)
  //   if (res.payload.data.status === 200) {
  //     navigate("/dashboard")
  //   }
  //   if(res){

  //     console.log(res)
  //   }
  // }
  return (
    <div className="bg-[#4c3b58] min-h-screen flex flex-col justify-center items-center">
      {/* {errors && <Alert severity="error" message="Invalid Credentials"/>}
      {isSubmitSuccessful && <Alert severity="success" message=""/>} */}
      {/* <div className="bg-gray-200 px-4 py-2 rounded-md mb-4">
        <img src="/qataloog.png" alt="" />
      </div> */}
      <div className="bg-white min-w-[35%] py-12 rounded-xl">
        <div className="px-12 flex flex-col items-center text-center gap-4">
          <div className="text-3xl font-medium text-center">Verify-email</div>
          <small className="text-sm">
            An account activation link has been sent to the email you provided
          </small>
          <FaEnvelope className="text-text-sub" size={128} />
          {/* <Button themeColor="main" variant="contained" className="w-full py-4" type="submit" onClick={handleSubmit(onSubmit)}>
            Submit
          </Button> */}

          <small className="text-center text-sm">
            Didn't get a mail?
            <Link className="text-brand-primary text-center" to="..">
              {" "}
              Resend
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};
