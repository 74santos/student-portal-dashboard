
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

import type {
  NotificationItem,
} from "../types";

import { AppContext }
from "./AppContext";

import {
  generateNotifications,
} from "../utils/notificationEngine";



type NotificationContextType = {

  notifications: NotificationItem[];

  setNotifications:
    React.Dispatch<
      React.SetStateAction<
        NotificationItem[]
      >
    >;

};

const NotificationContext =
  createContext<
    NotificationContextType | undefined
  >(undefined);

type Props = {
  children: ReactNode;
};

export function NotificationProvider({
  children,
}: Props) {

  const app =
  useContext(AppContext);

    if (!app) {

      throw new Error(
        "NotificationProvider requires AppProvider."
      );

    }

    const {
      assignments,
      courses,
      student,
    } = app;

  const [notifications, setNotifications] =
    useState<NotificationItem[]>([]);



  useEffect(() => {

      const generated =
        generateNotifications(
          assignments,
          courses,
          student
        );
    
      setNotifications(
        generated
      );
    
    }, [
      assignments,
      courses,
      student,
    ]);

  return (

    <NotificationContext.Provider
      value={{
        notifications,
        setNotifications,
      }}
    >

      {children}

    </NotificationContext.Provider>

  );

}

export function useNotifications() {

  const context =
    useContext(
      NotificationContext
    );

  if (!context) {

    throw new Error(
      "useNotifications must be used inside NotificationProvider"
    );

  }

  return context;

}