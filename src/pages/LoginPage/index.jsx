import { Logo } from "../../components/Logo";
import { LoginPageStyled } from "./styles";
import { useState } from "react";
import { FormLogin } from "../../components/Forms/FormLogin";
import { TextStyled } from "../../styles/globalComponents/Text/TextStyled";
import { Link } from "../../styles/globalComponents/Link/LinkStyled";

export const LoginPage = ({ setUser }) => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <LoginPageStyled>
        <TextStyled type="legend" color="greyZero" fontType="titleOne">
          Carregando...
        </TextStyled>
      </LoginPageStyled>
    );
  }
  return (
    <LoginPageStyled>
      <div>
        <Logo />
        <div>
          <TextStyled type="legend" color="greyZero" fontType="titleOne">
            Login
          </TextStyled>

          <FormLogin setUser={setUser} setIsLoading={setIsLoading} />

          <TextStyled type="span" color="greyZero" fontType="headline">
            Ainda não possui uma conta?
          </TextStyled>

          <Link to="/register" type="disabled">
            Cadastre-se
          </Link>
        </div>
      </div>
    </LoginPageStyled>
  );
};
