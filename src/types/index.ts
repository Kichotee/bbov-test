import {
  Control,
  FieldErrorsImpl,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form/dist/types";

export type IChildren = {
  children: React.ReactNode;
};
export type ButtonProps = {
  size?: string;
  variant?: string;
  themeColor?: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface IModifiedDialog extends IChildren {
  open: boolean;
  onClose: () => void;
  onAction?: () => void;
  onSeconAction?: () => void;
  secActionText?: string;
  actionText?: string;
  title?: string;
  description?: string;
  subTitle?: string;
  loading?: boolean;
  disabled?: boolean;
  isSecCancel?: boolean;
  hideDialogTitle?: boolean;
  actionSeverity?: "error" | "secondary" | "primary" | "success";
  secActionSeverity?: "error" | "secondary" | "primary" | "success";
}

export interface ISuccessModal {
  open: boolean;
  onClose: () => void;
  onAction?: () => void;
  title?: string;
  description?: string;
  subTitle?: string;
  isTitle?: boolean;
  actionText?: string;
  content?: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> & { title?: string | undefined };
  loading?: boolean;
  isError?: boolean;
  hideButton?: boolean;
}
export interface BaseControlledParameter<TFieldValues extends FieldValues> {
  /**
   *
   * it is equivalent to the controller error validation for the helperText
   */
  errors?: Partial<FieldErrorsImpl<TFieldValues>>;
  /**
   *
   * it is equivalent to the validation rule of Yup and Zod
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<TFieldValues, any>;
  /**
   *
   * if `true` & @param {name} for the component name attribute
   */
  name: Path<TFieldValues>;
  /**
   *
   * it is equivalent to the validation rule of Yup and Zod
   */
  rules?: Omit<
    RegisterOptions<TFieldValues, Path<TFieldValues>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}
export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: {
    url: string;
    label: string;
    active: boolean;
  }[];
  path: string;
  per_page: number;
  to: number;
  total: number;

}
export type LeadStatus =
  | "Lead Generated"
  | "Contacted"
  | "Application Submitted"
  | "Application Under Review"
  | "Deal Finalized"
  | "Payment Confirmed"
  | "Completed"
  | "Lost";

export type Deals= {
  id: number;
  client: string;
  product: string;
  created: number;
  description?:string;
  stage: LeadStatus;
}
