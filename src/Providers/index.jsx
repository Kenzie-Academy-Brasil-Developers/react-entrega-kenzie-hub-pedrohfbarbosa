import React from "react";
import { UserProvider } from "./UserContext";

export const Providers = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};
