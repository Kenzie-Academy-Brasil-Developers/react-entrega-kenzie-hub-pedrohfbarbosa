import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
});

export const requestLogin = async (data, setUser, navigate, setIsLoading) => {
  setIsLoading(true);
  try {
    const response = await instance.post("/sessions", data);

    if (response.status === 200) {
      toast.success("Login efetuado com sucesso", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setUser(response.data.user);

      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);

      navigate("/dashboard");
    } else {
      toast.error("Opa! Algo deu errado", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  } catch (err) {
    toast.error("Opa! Algo deu errado", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  } finally {
    setIsLoading(false);
  }
};

export const requestRegister = async (data, navigate, setIsLoading) => {
  setIsLoading(true);
  try {
    const response = await instance.post("/users", data);

    if (response.status === 201) {
      toast.success("Cadastro efetuado com sucesso", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      navigate("/");
    } else {
      toast.error("Opa! Algo deu errado", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  } catch (err) {
    toast.error("Opa! Algo deu errado", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  } finally {
    setIsLoading(false);
  }
};
