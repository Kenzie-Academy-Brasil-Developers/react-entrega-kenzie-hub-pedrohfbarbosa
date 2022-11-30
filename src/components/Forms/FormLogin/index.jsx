import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { requestLogin } from "../../../services/api/requestLogin";
import { schemaLogin } from "./schema";
import { Form } from "../../../styles/globalComponents/Form/FormStyled";
import { InputWrapper } from "../../InputWrapper";
import { Input } from "../../../styles/globalComponents/Input/InputStyled";
import { Button } from "../../../styles/globalComponents/Button/ButtonStyled";
import { ButtonView } from "../ButtonView";

export const FormLogin = ({ setUser, setIsLoading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = async (data) => {
    await requestLogin(data, setUser, navigate, setIsLoading);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper label="E-mail" error={errors.email}>
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
      </InputWrapper>

      <InputWrapper label="Senha" error={errors.password}>
        <ButtonView
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <Input
          type={showPassword ? "text" : "password"}
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
