import React, { ReactNode } from "react";
import { SelectInputProps } from "../Input/type";
import { SelectItems } from "./SelectItems";
import FormHelperText from "../Input/formHelperText";

const SelectInput = React.forwardRef<HTMLSelectElement, SelectInputProps>(
  ({ name, children, options, helperText, id, FormHelperTextProps, ...props }, ref) => {
    // eslint-disable-next-line no-undefined
    const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
    return (
      <div className="">
                <label htmlFor=""className="text-xs text-brand-primary/80 font-semibold">{props.label}</label>

        <select
          className={` border rounded py-1 px-2 text-xs   text-text-sub peer focus:outline-none w-full  ${props.className}`}
          name={name}
          id={id}
          ref={ref}
          {...props}
        >
          {Array.isArray(options) &&
            options?.map((option) => {
              return (
                <SelectItems value={option.value} key={`${option.label}-select-${option.value}`}>
                  {option.label}
                </SelectItems>
              );
            })}
          {children as ReactNode}
        </select>

        {helperText && (
          <FormHelperText id={helperTextId} {...FormHelperTextProps}>
            {helperText}
          </FormHelperText>
        )}
      </div>
    );
  }
);

export default SelectInput;
