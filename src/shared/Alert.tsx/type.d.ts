// import { IChildren } from "@/@types/baseInterface";
import React from "react";

export type IAlertSeverity = "error" | "warning" | "info" | "success";
export interface IAlert {
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity?: "error" | "warning" | "info" | "success";
  message?: string;
}

export interface IAlertProps extends IAlert, React.DetailsHTMLAttributes<HTMLDivElement> {}
