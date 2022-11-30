import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Form } from "../../../styles/globalComponents/Form/FormStyled";
import { Input } from "../../../styles/globalComponents/Input/InputStyled";
import { Select } from "../../../styles/globalComponents/Select/SelectStyled";
import { TextStyled } from "../../../styles/globalComponents/Text/TextStyled";
import { Button } from "../../../styles/globalComponents/Button/ButtonStyled";
import { instance, requestRegister } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { schemaRegister } from "./schema";

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
      <div>
        <TextStyled type="label" color="greyZero" fontType="headline">
          Nome
        </TextStyled>
        <Input
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        {errors.name && (
          <TextStyled type="span" color="greyZero" fontType="headline">
            {errors.name.message}
          </TextStyled>
        )}
      </div>

      <div>
        <TextStyled type="label" color="greyZero" fontType="headline">
          E-mail
        </TextStyled>
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        {errors.email && (
          <TextStyled type="span" color="greyZero" fontType="headline">
            {errors.email.message}
          </TextStyled>
        )}
      </div>

      <div>
        <TextStyled type="label" color="greyZero" fontType="headline">
          Senha
        </TextStyled>
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="btnShow"
        >
          {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password && (
          <TextStyled type="span" color="greyZero" fontType="headline">
            {errors.password.message}
          </TextStyled>
        )}
      </div>

      <div>
        <TextStyled type="label" color="greyZero" fontType="headline">
          Confirme sua senha
        </TextStyled>
        <button
          type="button"
          onClick={() => setShowSecondPassword(!showSecondPassword)}
          className="btnShow"
        >
          {showSecondPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
        <Input
          type={showSecondPassword ? "text" : "password"}
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <TextStyled type="span" color="greyZero" fontType="headline">
            {errors.confirmPassword.message}
          </TextStyled>
        )}
      </div>

      <div>
        <TextStyled type="label" color="greyZero" fontType="headline">
          Bio
        </TextStyled>
        <Input type="text" placeholder="Fale sobre você" {...register("bio")} />
        {errors.bio && (
          <TextStyled type="span" color="greyZero" fontType="headline">
            {errors.bio.message}
          </TextStyled>
        )}
      </div>

      <div>
        <TextStyled type="label" color="greyZero" fontType="headline">
          Contato
        </TextStyled>
        <Input
          type="text"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        {errors.contact && (
          <TextStyled type="span" color="greyZero" fontType="headline">
            {errors.contact.message}
          </TextStyled>
        )}
      </div>

      <div>
        <TextStyled type="label" color="greyZero" fontType="headline">
          Selecionar módulo
        </TextStyled>
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
        {errors.course_module && (
          <TextStyled type="span" color="greyZero" fontType="headline">
            {errors.course_module.message}
          </TextStyled>
        )}
      </div>

      <Button type="submit" btnType="primary">
        Entrar
      </Button>
    </Form>
  );
};
