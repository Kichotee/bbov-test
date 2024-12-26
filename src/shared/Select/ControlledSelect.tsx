/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from "react";
import { FieldValues } from "react-hook-form/dist/types";
import { Controller } from "react-hook-form";
// import { BaseControlledParameter } from "@/@types/baseInterface";
// import { SelectInputProps } from "./types";

import SelectInput from "./SelectInput";
import { BaseControlledParameter } from "@/types";

import { SelectProps } from "./types";

type OmitRadioProps = Omit<SelectProps, "name" | "value" | "onBlur" | "ref">;

export interface IControlledSelectInputProps<TFieldValues extends FieldValues>
  extends OmitRadioProps,
    BaseControlledParameter<TFieldValues> {}

/**
 *
 * @param props
 * @returns to use with a useForm from react-hook-form
 */
const ModifiedControlledSelect = <TFormValue extends FieldValues>(
  props: IControlledSelectInputProps<TFormValue>
) => {
  const {
    control,
    rules,
    name: cname,
    label,
    options,
    isSearch,
    onChange: propsOnChange,
    disabled,
    onOutChange,
    isOutFetch,
    onEndOfRow,
  } = props;

  return (
    <Controller
      control={control}
      rules={rules}
      name={cname}
      // eslint-disable-next-line no-unused-vars
      render={({ field: { ref, onChange, value, ...fields }, fieldState: { error } }) => {
        return (
          <SelectInput
            autoFocus
            ref={ref}
            label={label}
            
            value={value}
            disabled={disabled}
              // error={Boolean(error)}
            onChange={(val) => {
              
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              onChange(val);
              if (propsOnChange) propsOnChange(val);
            }}
            FormHelperTextProps={{
              // "data-app-error": Boolean(error?.message),
              error: Boolean(error),
            }}
            // ref={ref}
            helperText={error?.message || ""}
            // {...rest}
            //   onEndOfRow={onEndOfRow}
            options={options}
            //   onOutChange={onOutChange}
            //   isOutFetch={isOutFetch}
            {...fields}
          />
        );
      }}
    />
  );
};

export default ModifiedControlledSelect;
