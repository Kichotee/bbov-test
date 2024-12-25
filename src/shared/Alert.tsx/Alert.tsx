import React from "react";
import { Transition } from "@headlessui/react";
import { IAlertProps, IAlertSeverity } from "./type";
// import { AnnouncementIcon } from "@/assets/svgs";

export type ALertIcon = Record<
  IAlertSeverity,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>> & { title?: string | undefined }
>;
// const alertIconMapper: ALertIcon = {
//   error: AnnouncementIcon,
//   info: AnnouncementIcon,
//   success: AnnouncementIcon,
//   warning: AnnouncementIcon,
// };

const Alert = React.forwardRef<HTMLDivElement, IAlertProps>((props, ref) => {
  const { severity, message, children, ...rest } = props;
  //   const IconMapper = alertIconMapper[severity || "error"];
  const [isShowing, setIsShowing] = React.useState(true);
  setTimeout(() => {
    setIsShowing(false);
  }, 5000);
  const getAlertColour = () => {
    switch (severity) {
      case "error":
        return {
          bg: "bg-error-150",
          color: "text-neutral-white",
          border: "border-error-150",
        };
      case "success":
        return {
          bg: "bg-success-50",
          border: "border-success-150",
          color: "text-success-150",
        };
      case "warning":
        return {
          bgcolor: "bg-warning-50",
          border: "border-warning-150",
          color: "text-warning-150",
        };

      default:
        return {
          bgcolor: "bg-error-50",
          border: "border-error-150",
          color: "text-neutral-white",
        };
    }
  };
  return (
    <Transition
      show={isShowing}
      enter="transition  ease-linear duration-300"
      enterFrom="opacity-0 x-95"
      enterTo="opacity-100 x-100"
      leave="transition  ease-linear duration-150"
      leaveFrom="opacity-100 x-100"
      leaveTo="opacity-0 x-90"
    >
      <div
        className={` px-4 py-3 rounded-md flex gap-1 min-w-[200px] border absolute z-[5000] top-4 right-8 justify-end items-center
       ${getAlertColour().bg}  ${getAlertColour().color}`}
        role="alert"
        ref={ref}
        {...rest}
      >
        <div className="alert-icon">{/* <IconMapper fill={getAlertColour().color} /> */}</div>
        <div className={`alert-message flex-1 ${getAlertColour().color}`}>
          {children || message}
        </div>
        {/* <div className="alert-action">act</div> */}
      </div>
    </Transition>
  );
});

Alert.displayName = "Alert";
Alert.defaultProps = {
  severity: "success",
};

export default Alert;
