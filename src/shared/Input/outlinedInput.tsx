/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { OutlinedInputProps } from "./type";
import InputBase from "./InputBase";
import FormHelperText from "./formHelperText";

const OutlinedInput = React.forwardRef<HTMLInputElement, OutlinedInputProps>(
  ({
    label,
    sizes,
    value,
    className,
    fullWidth,
    placeholder,
    startAdornment,
    endAdornment,
    error,
    helperText,
    FormHelperTextProps,

    ...props
  }) => {
    const [focused, setFocused] = React.useState(false);

    return (
      <div
        className={`${props.type !== "checkbox" && "relative py-3 w-full"} ${
          props.type === "checkbox" && "flex gap-2"
        }`}
      >
        <div
          data-app-error={Boolean(error)}
          className={`${
            focused && "border border-border-secondary"
          } data-[app-error=true]:text-error-100 flex items-center border rounded px-1 ${
            props.type === "checkbox" && "border-0 px-0 block"
          }`}
        >
          {startAdornment && (
            <div className=" flex justify-start items-center flex-wrap">{startAdornment}</div>
          )}
          <InputBase
            value={value}
            className={className}
            placeholder={placeholder}
            onFocus={(e) => {
              setFocused(true);
              if (props.onFocus) {
                props.onFocus(e);
              }
            }}
            onBlurCapture={(e) => {
              setFocused(false);
              if (props.onBlurCapture) {
                props.onBlurCapture(e);
              }
            }}
            {...props}
            fullWidth
          />
          {endAdornment && (
            <div className=" flex justify-start items-center flex-wrap">{endAdornment}</div>
          )}
        </div>
        {helperText && (
          <FormHelperText
            className={`${props.type === "checkbox" && "inline-flex"}`}
            {...FormHelperTextProps}
          >
            {helperText}
          </FormHelperText>
        )}
      </div>
    );
  }
);

export default OutlinedInput;
