import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Form } from "../../../styles/globalComponents/Form/FormStyled";
import { Input } from "../../../styles/globalComponents/Input/InputStyled";
import { TextStyled } from "../../../styles/globalComponents/Text/TextStyled";
import { Button } from "../../../styles/globalComponents/Button/ButtonStyled";
import { useNavigate } from "react-router-dom";
import { requestLogin } from "../../../services/api";
import { schemaLogin } from "./schema";
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
      <div>
        <TextStyled type="label" color="greyZero" fontType="headline">
          E-mail
        </TextStyled>
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        <TextStyled type="span" color="greyZero" fontType="headline">
          {errors.email && errors.email.message}
        </TextStyled>
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
        <TextStyled type="span" color="greyZero" fontType="headline">
          {errors.password && errors.password.message}
        </TextStyled>
      </div>

      <Button type="submit" btnType="primary">
        Entrar
      </Button>
    </Form>
  );
};
