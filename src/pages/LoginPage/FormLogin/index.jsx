import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";

import { schemaLogin } from "./schema";
import { Form } from "../../../styles/globalComponents/Form/FormStyled";
import { InputWrapper } from "../../../components/InputWrapper";
import { ButtonViewPassword } from "../../../components/ButtonViewPassword";
import { Input } from "../../../styles/globalComponents/Input/InputStyled";
import { Button } from "../../../styles/globalComponents/Button/ButtonStyled";
import { UserContext } from "../../../Providers/UserContext";

export const FormLogin = () => {
  const { requestLogin } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schemaLogin),
  });

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
