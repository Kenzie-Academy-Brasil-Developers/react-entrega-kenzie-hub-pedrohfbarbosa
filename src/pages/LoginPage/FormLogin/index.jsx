import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastStyle } from "../../../styles/toast";
import { instance } from "../../../services/api/api";
import { schemaLogin } from "./schema";
import { Form } from "../../../styles/globalComponents/Form/FormStyled";
import { InputWrapper } from "../../../components/InputWrapper";
import { ButtonViewPassword } from "../../../components/ButtonViewPassword";
import { Input } from "../../../styles/globalComponents/Input/InputStyled";
import { Button } from "../../../styles/globalComponents/Button/ButtonStyled";

export const FormLogin = ({ setUser, setIsLoading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schemaLogin),
  });

  const requestLogin = async (data) => {
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

  const onSubmit = async (data) => {
    await requestLogin(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <InputWrapper label="E-mail" htmlFor="email" error={errors.email}>
        <Input
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
      </InputWrapper>

      <InputWrapper label="Senha" htmlFor="password" error={errors.password}>
        <ButtonViewPassword
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <Input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
      </InputWrapper>

      <Button type="submit" btnType="primary">
        Entrar
      </Button>
    </Form>
  );
};
