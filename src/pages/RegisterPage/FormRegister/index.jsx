import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastStyle } from "../../../styles/toast";
import { instance } from "../../../services/api/api";
import { schemaRegister } from "./schema";
import { Form } from "../../../styles/globalComponents/Form/FormStyled";
import { InputWrapper } from "../../../components/InputWrapper";
import { ButtonViewPassword } from "../../../components/ButtonViewPassword";
import { Input } from "../../../styles/globalComponents/Input/InputStyled";
import { Select } from "../../../styles/globalComponents/Select/SelectStyled";
import { Button } from "../../../styles/globalComponents/Button/ButtonStyled";

export const FormRegister = ({ setIsLoading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSecondPassword, setShowSecondPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schemaRegister),
  });

  const requestRegister = async (data) => {
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

  const onSubmit = async (data) => {
    await requestRegister(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <InputWrapper label="Nome" htmlFor="name" error={errors.name}>
        <Input
          type="text"
          id="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
      </InputWrapper>

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

      <InputWrapper
        label="Confirme sua senha"
        htmlFor="confirmPassword"
        error={errors.confirmPassword}
      >
        <ButtonViewPassword
          showPassword={showSecondPassword}
          setShowPassword={setShowSecondPassword}
        />
        <Input
          type={showSecondPassword ? "text" : "password"}
          id="confirmPassword"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />
      </InputWrapper>

      <InputWrapper label="Bio" htmlFor="bio" error={errors.bio}>
        <Input
          type="text"
          id="bio"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
      </InputWrapper>

      <InputWrapper label="Contato" htmlFor="contact" error={errors.contact}>
        <Input
          type="text"
          id="contact"
          placeholder="Opção de contato"
          {...register("contact")}
        />
      </InputWrapper>

      <InputWrapper
        label="Selecionar módulo"
        htmlFor="course_module"
        error={errors.course_module}
      >
        <Select id="course_module" {...register("course_module")}>
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
        Cadastrar
      </Button>
    </Form>
  );
};
