import { RegisterPageStyled } from "./styles";
import { useState } from "react";
import { TextStyled } from "../../styles/globalComponents/Text/TextStyled";
import { FormRegister } from "../../components/Forms/FormRegister";
import { Header } from "../../components/Header";
import { Link } from "../../styles/globalComponents/Link/LinkStyled";

export const RegisterPage = ({ setUser }) => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <RegisterPageStyled>
        <TextStyled type="legend" color="greyZero" fontType="titleOne">
          Carregando...
        </TextStyled>
      </RegisterPageStyled>
    );
  }
  return (
    <RegisterPageStyled>
      <div>
        <Header>
          <Link to="/" type="linkMinor">
            Voltar
          </Link>
        </Header>
        <div>
          <TextStyled type="legend" color="greyZero" fontType="titleOne">
            Crie sua conta
          </TextStyled>

          <TextStyled type="span" color="greyOne" fontType="headline">
            Rapido e grátis, vamos nessa
          </TextStyled>

          <FormRegister setUser={setUser} setIsLoading={setIsLoading} />
        </div>
      </div>
    </RegisterPageStyled>
  );
};
