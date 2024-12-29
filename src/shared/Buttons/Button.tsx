import React from "react";
import { ButtonProps } from "@/types";

// eslint-disable-next-line consistent-return
const variantFn = (variantStyle = "") => {
  switch (variantStyle) {
    case "outlined":
      return " border-brand-primary rounded border bg-transparent";
    case "contained":
      return "bg-brand-primary dark:bg-brand-primary/70 rounded";
    case "text":
      return " bg-transparent text-text-main";
    default:
  }
};
const themeColorFn = (style = "") => {
  switch (style) {
    case "main":
      return " text-white 1rem font-semibold px-8 py-2 rounded hover:bg-brand-primary/50 duration-200";
    case "dark":
      return "bg-text-main text-white duration-200";

    case "":
      return "";
    default:
  }
};
// eslint-disable-next-line consistent-return
const sizeFn = (style = "") => {
  switch (style) {
    case "main":
      return " px-8 py-2  ";

    case "":
      return " bg-red-200, px-4 py-2";
    default:
  }
};
const Button = ({
  type,
  children,
  variant,
  size,
  themeColor,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${variantFn(variant)} ${themeColorFn(themeColor)} ${sizeFn(size)} ${className} `}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
