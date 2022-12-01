import { useState } from "react";
import { ContainerMotion } from "../../components/ContainerMotion";
import { RegisterPageStyled } from "./styles";
import { TextStyled } from "../../styles/globalComponents/Text/TextStyled";
import { FormRegister } from "./FormRegister";
import { Header } from "../../components/Header";
import { Link } from "../../styles/globalComponents/Link/LinkStyled";

export const RegisterPage = ({ setUser }) => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <RegisterPageStyled>
        <TextStyled tag="h2" color="greyZero" fontType="titleOne">
          Carregando...
        </TextStyled>
      </RegisterPageStyled>
    );
  }
  return (
    <ContainerMotion>
      <RegisterPageStyled>
        <div>
          <Header>
            <Link to="/" anchor="linkMinor">
              Voltar
            </Link>
          </Header>

          <div>
            <TextStyled tag="h2" color="greyZero" fontType="titleOne">
              Crie sua conta
            </TextStyled>

            <TextStyled tag="span" color="greyOne" fontType="headline">
              Rapido e grátis, vamos nessa
            </TextStyled>

            <FormRegister setUser={setUser} setIsLoading={setIsLoading} />
          </div>
        </div>
      </RegisterPageStyled>
    </ContainerMotion>
  );
};
