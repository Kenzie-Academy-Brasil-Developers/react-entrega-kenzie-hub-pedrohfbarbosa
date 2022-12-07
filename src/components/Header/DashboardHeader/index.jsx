import { useContext } from "react";
import { UserContext } from "../../../Providers/UserContext";
import { Container } from "../../../styles/globalComponents/Container/Container";
import { Header } from "..";
import { Button } from "../../../styles/globalComponents/Button/ButtonStyled";

export const DashboardHeader = () => {
  const { handleLogout } = useContext(UserContext);

  return (
    <Container>
      <Header>
        <Button onClick={handleLogout} btnType="btnMinor">
          Sair
        </Button>
      </Header>
    </Container>
  );
};
