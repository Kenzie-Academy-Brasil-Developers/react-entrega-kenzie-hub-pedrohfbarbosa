import { instance } from "./api";
import { toast } from "react-toastify";
import { toastStyle } from "../../styles/toast";

export const requestLogin = async (data, setUser, navigate, setIsLoading) => {
  setIsLoading(true);
  try {
    const response = await instance.post("/sessions", data);

    if (response.status === 200) {
      toast.success("Login efetuado com sucesso", toastStyle);

      setUser(response.data.user);

      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);

      navigate("/dashboard");
    } else {
      toast.error("Opa! Algo deu errado", toastStyle);
    }
  } catch (err) {
    toast.error("Opa! Algo deu errado", toastStyle);
  } finally {
    setIsLoading(false);
  }
};