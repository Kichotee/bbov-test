import { type OptionType } from "@/types";
import { FormHelperTextProps } from "../Input/type";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SelectItemProps extends React.OptionHTMLAttributes<HTMLOptionElement> {}
export interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  options?: OptionType[];
  children?: React.ReactNode;
  label?: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (_value: React.ChangeEvent<HTMLSelectElement>) => void;
  helperText?: string | React.ReactNode;
  FormHelperTextProps?: FormHelperTextProps;
  name?: string;
  error?: boolean;
  isSearch?: boolean;
  disabled?: boolean;
  /**
   * if `true` & @param {onOutFetch} it will fetch the remote query change
   */
  isOutFetch?: boolean;
  /**
   * if `true` & @param {_x `string`} it will fetch the remote query change
   */
  // eslint-disable-next-line no-unused-vars
  onOutChange?: (_value: string) => void;
  filterClass?: string;
  /**
   * if `true` & @param {boolean} it will fetch the infinite query
   */
  // eslint-disable-next-line no-unused-vars
  onEndOfRow?: (_x: boolean) => void;
}
