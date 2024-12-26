/* eslint-disable no-unused-vars */
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BiX } from "react-icons/bi";
import { IModifiedDialog } from "@/types";
// import IconButton from "@/shared/Button/IconButton";
import Button from "@/shared/Buttons/Button";
// import CircularProgress from "@/shared/CircularProgress";

const ModifiedDialog = (props: IModifiedDialog) => {
  const {
    open,
    onAction,
    actionText,
    onClose,
    title,
    children,
    secActionText,
    onSeconAction,
    description,
    loading,
    disabled,
    isSecCancel,
    hideDialogTitle,
    // actionSeverity,
    // secActionSeverity,
  } = props;
  return (
    <Transition appear show={open} as={React.Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="modified-dialog-content  w-[500px]  transform overflow-auto relative rounded-lg bg-white  text-left align-middle shadow-xl transition-all">
                {!hideDialogTitle && (
                  <Dialog.Title className="py-3 px-6 border-b sticky top-0 bg-white z-10">
                    <div className="flex justify-between items-center font-semibold">
                      <p className="text-neutral-black flex-1">{title || ""}</p>
                      <Button onClick={onClose} className="outline-none border border-transparent hover:border-stone-400 duration-200 rounded"><BiX/></Button>
                    </div>
                  </Dialog.Title>
                )}
                <Dialog.Description className="p-6">
                  {description && (
                    <p className=" text-neutral-bodyText text-sm my-2">{description}</p>
                  )}
                  <div>{children}</div>
                </Dialog.Description>
                <div className="sticky bottom-0">
                  <div className="flex justify-center gap-4 items-center bg-neutral-bg py-4 px-6 ">
                    {/* {
                      <Button
                        variant="outlined"
                        disabled={disabled || loading}
                        // startArdornment={
                        //   loading && (
                        //     <span>
                        //       <CircularProgress
                        //         color="rgb(83 182 237 / var(--tw-text-opacity))"
                        //       />
                        //     </span>
                        //   )
                        // }
                        className="w-full"
                        onClick={() => {
                          if (isSecCancel) {
                            onClose();
                          } else if (onSeconAction) {
                            onSeconAction();
                          }
                        }}
                      >
                        {secActionText || "Close"}
                      </Button>
                    } */}
                    

                    {actionText && (
                      <Button
                        className="w-full text-white"
                        themeColor="secondary"
                        variant="contained"
                        onClick={() => {
                          if (onAction) {
                            onAction();
                          }
                        }}
                        // startArdornment={
                        //   loading && (
                        //     <span>
                        //       <CircularProgress color={"white"} />
                        //     </span>
                        //   )
                        // }
                        disabled={disabled || loading}
                      >
                        {actionText || "Ok"}
                      </Button>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

ModifiedDialog.defaultProps = {
  actionSeverity: "secondary",
  secActionSeverity: "secondary",
};

export default React.memo(ModifiedDialog);
