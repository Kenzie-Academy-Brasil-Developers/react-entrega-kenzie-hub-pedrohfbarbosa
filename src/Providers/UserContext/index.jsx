import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { instance } from "../../services/api/api";
import { toastStyle } from "../../styles/toast";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [isLoadingRegister, setIsLoadingRegister] = useState(false);
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  const navigate = useNavigate();

  const getUser = async () => {
    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      setIsLoadingPage(false);
      return;
    }

    try {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const response = await instance.get("/profile");

      setUser(response.data);
    } catch (err) {
      localStorage.removeItem("@TOKEN");
      localStorage.removeItem("@USERID");

      toast.error("Acesso não autorizado", toastStyle);
    } finally {
      setIsLoadingPage(false);
    }
  };

  useEffect(() => {
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

      setIsLoadingPage(false);

      instance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("@TOKEN")}`;

      navigate("/dashboard");
    } catch (err) {
      const { message } = err.response.data;

      message.toLowerCase().includes("incorrect")
        ? toast.error("E-mail ou senha incorretos", toastStyle)
        : toast.error("Opa! Algo deu errado", toastStyle);
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
      const { message } = err.response.data;

      message.toLowerCase().includes("already")
        ? toast.error("Opa! E-mail já cadastrado", toastStyle)
        : toast.error("Opa! Algo deu errado", toastStyle);
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
        isLoadingPage,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
