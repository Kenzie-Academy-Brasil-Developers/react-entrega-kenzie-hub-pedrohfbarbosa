import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";
import { TechContext } from "../../Providers/TechContext";
import { Container } from "../../styles/globalComponents/Container/Container";
import { TextStyled } from "../../styles/globalComponents/Text/TextStyled";
import { EmptyList, TechListStyled } from "./style";
import { TechCard } from "./TechCard";
import { Button } from "../../styles/globalComponents/Button/ButtonStyled";

export const TechList = () => {
  const { user } = useContext(UserContext);
  const { setIsModalCreate } = useContext(TechContext);

  const { techs } = user;

  const handleOpenModal = () => {
    setIsModalCreate(true);
  };

  return (
    <Container>
      <TechListStyled>
        <div>
          <TextStyled tag="h2" color="greyZero" fontType="titleTwo">
            Tecnologias
          </TextStyled>

          <Button onClick={handleOpenModal} btnType="btnMinor">
            +
          </Button>
        </div>

        {!techs.length ? (
          <EmptyList>
            <TextStyled tag="p" fontType="textDefault" color="greyZero">
              Ainda não existem tecnologias cadastradas
            </TextStyled>
          </EmptyList>
        ) : (
          <ul>
            {techs.map((e) => (
              <TechCard key={e.id} tech={e} />
            ))}
          </ul>
        )}
      </TechListStyled>
    </Container>
  );
};
