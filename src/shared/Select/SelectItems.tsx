import React from "react";
import { SelectItemProps } from "./types";

export const SelectItems = React.forwardRef<HTMLOptionElement, SelectItemProps>(
  ({ onChange, className, children, value }, ref) => {
    return (
      <option
        value={value}
        ref={ref}
        onChange={onChange}
        className={`${className} text-sm min-h-[auto] bg-neutral-white hover:bg-brand-primary py-5 h-10 focus:bg-border-primary`}
      >
        {children}
      </option>
    );
  }
);
