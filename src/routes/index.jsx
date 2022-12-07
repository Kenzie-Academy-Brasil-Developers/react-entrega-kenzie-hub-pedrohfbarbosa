import { Routes as RoutesMain, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Dashboard } from "../pages/Dashboard";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export const Routes = ({ user, setUser }) => {
  return (
    <>
      <AnimatePresence>
        <RoutesMain>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </RoutesMain>
      </AnimatePresence>
    </>
  );
};
