import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";
import { Container } from "../../styles/globalComponents/Container/Container";
import { TextStyled } from "../../styles/globalComponents/Text/TextStyled";
import { TechListStyled } from "./style";
import { TechCard } from "./TechCard";
import {Button} from "../../styles/globalComponents/Button/ButtonStyled"

export const TechList = () => {
  const { user } = useContext(UserContext);

  return !user.techs.length ? (
    <Container>
      <TechListStyled>
        <TextStyled tag="h2" fontType="textButton" color="greyZero">
          Ainda não existem tecnologias cadastradas
        </TextStyled>
      </TechListStyled>
    </Container>
  ) : (
    <Container>
      <TechListStyled>
        <div>
          <TextStyled tag="h2" color="greyZero" fontType="titleTwo">
            Tecnologias
          </TextStyled>
          <Button btnType="btnMinor">+</Button>
        </div>
        <ul>
          {user.techs.map((e) => (
            <TechCard key={e.id} tech={e} />
          ))}
        </ul>
      </TechListStyled>
    </Container>
  );
};
