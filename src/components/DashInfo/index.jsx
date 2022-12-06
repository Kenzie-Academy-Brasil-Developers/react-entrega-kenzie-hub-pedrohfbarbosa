import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";
import { Container } from "../../styles/globalComponents/Container/Container";
import { TextStyled } from "../../styles/globalComponents/Text/TextStyled";
import { DashInfoStyled } from "./style";

export const DashInfo = () => {
  const { user } = useContext(UserContext);

  return (
    <DashInfoStyled>
      <Container>
        <TextStyled tag="h2" fontType="titleOne" color="greyZero">
          Olá, {user.name}
        </TextStyled>

        <TextStyled tag="p" fontType="headlineBold" color="greyOne">
          {user.course_module}
        </TextStyled>
      </Container>
    </DashInfoStyled>
  );
};
