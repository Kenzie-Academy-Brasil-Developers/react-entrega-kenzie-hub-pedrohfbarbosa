import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { requestRegister } from "../../../services/api/requestRegister";
import { schemaRegister } from "./schema";
import { Form } from "../../../styles/globalComponents/Form/FormStyled";
import { InputWrapper } from "../../InputWrapper";
import { Input } from "../../../styles/globalComponents/Input/InputStyled";
import { Select } from "../../../styles/globalComponents/Select/SelectStyled";
import { Button } from "../../../styles/globalComponents/Button/ButtonStyled";
import { ButtonView } from "../ButtonView";

export const FormRegister = ({ setIsLoading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSecondPassword, setShowSecondPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const onSubmit = async (data) => {
    await requestRegister(data, navigate, setIsLoading);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <InputWrapper label="Nome" error={errors.name}>
        <Input
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
      </InputWrapper>

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

      <InputWrapper label="Confirme sua senha" error={errors.confirmPassword}>
        <ButtonView
          showPassword={showSecondPassword}
          setShowPassword={setShowSecondPassword}
        />
        <Input
          type={showSecondPassword ? "text" : "password"}
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />
      </InputWrapper>

      <InputWrapper label="Bio" error={errors.bio}>
        <Input type="text" placeholder="Fale sobre você" {...register("bio")} />
      </InputWrapper>

      <InputWrapper label="Contato" error={errors.contact}>
        <Input
          type="text"
          placeholder="Opção de contato"
          {...register("contact")}
        />
      </InputWrapper>

      <InputWrapper label="Selecionar módulo" error={errors.course_module}>
        <Select {...register("course_module")}>
          <option value="">Selecione seu módulo</option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo
          </option>
        </Select>
      </InputWrapper>

      <Button type="submit" btnType="primary">
        Entrar
      </Button>
    </Form>
  );
};
