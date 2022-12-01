import { Routes as RoutesMain, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Dashboard } from "../pages/Dashboard";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const Routes = ({ user, setUser }) => {
  return (
    <>
      <AnimatePresence>
        <RoutesMain>
          <Route path="/" element={<LoginPage setUser={setUser} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/dashboard"
            element={<Dashboard user={user} setUser={setUser} />}
          />
        </RoutesMain>
      </AnimatePresence>
    </>
  );
};
