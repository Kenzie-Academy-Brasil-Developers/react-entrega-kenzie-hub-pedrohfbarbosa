import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { instance } from "../../services/api/api";
import { toastStyle } from "../../styles/toast";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [isLoadingRegister, setIsLoadingRegister] = useState(false);
  const [isLoadingDashboard, setIsLoadingDashboard] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    const getUser = async () => {
      if (!token) {
        return;
      }

      try {
        const response = await instance.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        console.error(error);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      } finally {
        setIsLoadingDashboard(false);
      }
    };

    getUser();
  }, []);

  const requestLogin = async (data) => {
    setIsLoadingLogin(true);
    try {
      const response = await instance.post("/sessions", data);

      toast.success("Login efetuado com sucesso", toastStyle);

      setUser(response.data.user);

      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);

      setIsLoadingDashboard(false);
      navigate("/dashboard");
    } catch (err) {
      toast.error("Opa! Algo deu errado", toastStyle);
    } finally {
      setIsLoadingLogin(false);
    }
  };

  const requestRegister = async (data) => {
    setIsLoadingRegister(true);
    try {
      await instance.post("/users", data);

      toast.success("Cadastro efetuado com sucesso", toastStyle);

      navigate("/");
    } catch (err) {
      toast.error("Opa! Algo deu errado", toastStyle);
    } finally {
      setIsLoadingRegister(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        requestLogin,
        user,
        isLoadingLogin,
        requestRegister,
        isLoadingRegister,
        handleLogout,
        isLoadingDashboard,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
