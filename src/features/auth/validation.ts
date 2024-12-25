/* eslint-disable import/no-extraneous-dependencies */

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export const loginSchema = yup
  .object({
    email: yup.string().email().required("Email is required"),

    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 characters minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain numbers with letter  ."),
  })
  .required();
export const registerSchema = yup
  .object({
    name: yup.string().required("name is required"),
    email: yup.string().email().required("Email is required"),

    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 characters minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain numbers with letter  ."),
    checkbox: yup.boolean().required("Confirm you have read terms and conditions"),
  })
  .required();
export const loginResolver = yupResolver(loginSchema);
export const registerResolver = yupResolver(registerSchema);
