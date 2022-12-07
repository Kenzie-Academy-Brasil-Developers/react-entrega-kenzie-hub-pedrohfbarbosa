import { useContext } from "react";
import { ContainerMotion } from "../../components/ContainerMotion";
import { Logo } from "../../components/Logo";
import { LoginPageStyled } from "./styles";
import { FormLogin } from "./FormLogin";
import { TextStyled } from "../../styles/globalComponents/Text/TextStyled";
import { Link } from "../../styles/globalComponents/Link/LinkStyled";
import { UserContext } from "../../Providers/UserContext";

export const LoginPage = () => {
  const { isLoadingLogin } = useContext(UserContext);

  if (isLoadingLogin) {
    return (
      <LoginPageStyled>
        <TextStyled tag="h2" color="greyZero" fontType="titleOne">
          Carregando...
        </TextStyled>
      </LoginPageStyled>
    );
  }

  return (
    <ContainerMotion>
      <LoginPageStyled>
        <div>
          <Logo />
          <div>
            <TextStyled tag="h2" color="greyZero" fontType="titleOne">
              Login
            </TextStyled>

            <FormLogin />

            <TextStyled tag="span" color="greyZero" fontType="headline">
              Ainda não possui uma conta?
            </TextStyled>

            <Link to="/register" anchor="disabled">
              Cadastre-se
            </Link>
          </div>
        </div>
      </LoginPageStyled>
    </ContainerMotion>
  );
};
