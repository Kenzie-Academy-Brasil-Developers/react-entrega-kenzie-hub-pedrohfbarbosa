import { instance } from "./api";
import { toast } from "react-toastify";
import { toastStyle } from "../../styles/toast";

export const requestRegister = async (data, navigate, setIsLoading) => {
  setIsLoading(true);
  try {
    const response = await instance.post("/users", data);

    if (response.status === 201) {
      toast.success("Cadastro efetuado com sucesso", toastStyle);

      navigate("/");
    } else {
      toast.error("Opa! Algo deu errado", toastStyle);
    }
  } catch (err) {
    toast.error("Opa! Algo deu errado", toastStyle);
  } finally {
    setIsLoading(false);
  }
};
