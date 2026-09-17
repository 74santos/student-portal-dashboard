import {
  createContext,
  useState,
  type ReactNode,
} from "react";

import type {
  Toast,
  ToastType,
} from "../types";

type ToastContextType = {

  showToast: (
    message: string,
    type?: ToastType
  ) => void;

};

export const ToastContext =
  createContext<
    ToastContextType | null
  >(null);

export function ToastProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [toasts, setToasts] =
    useState<Toast[]>([]);

  const showToast = (
    message: string,
    type: ToastType = "success"
  ) => {

    const id =
      crypto.randomUUID();

    const toast = {
      id,
      message,
      type,
    };

    setToasts((prev) => [
      ...prev,
      toast,
    ]);

    setTimeout(() => {

      setToasts((prev) =>
        prev.filter(
          (toast) =>
            toast.id !== id
        )
      );

    }, 3000);

  };

  return (

    <ToastContext.Provider
      value={{
        showToast,
      }}
    >

      {children}

      <div className="toast-container">

        {toasts.map((toast) => (

          <div
            key={toast.id}
            className={`toast ${toast.type}`}
          >

            {toast.message}

          </div>

        ))}

      </div>

    </ToastContext.Provider>

  );

}