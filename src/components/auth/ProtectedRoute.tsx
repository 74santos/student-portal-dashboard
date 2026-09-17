import { useContext } from "react";

import {
  Navigate,
} from "react-router-dom";

import {
  AppContext,
} from "../../context/AppContext";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({
  children,
}: Props) {

  const ctx =
    useContext(AppContext);

  if (!ctx) return null;

  const {
    isAuthenticated,
  } = ctx;

  if (!isAuthenticated) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );

  }

  return <>{children}</>;
}