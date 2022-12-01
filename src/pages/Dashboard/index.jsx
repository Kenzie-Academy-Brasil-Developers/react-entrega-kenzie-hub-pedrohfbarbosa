import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { DashboardStyled } from "./styles";
import { Button } from "../../styles/globalComponents/Button/ButtonStyled";
import { Container } from "../../styles/globalComponents/Container/Container";
import { TextStyled } from "../../styles/globalComponents/Text/TextStyled";

export const Dashboard = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  return (
    <DashboardStyled>
      <Container>
        <Header>
          <Button onClick={handleLogout} btnType="btnMinor">
            Sair
          </Button>
        </Header>
      </Container>

      <main>
        <div>
          <Container>
            <TextStyled tag="h2" fontType="titleOne" color="greyZero">
              Olá, {user.name}
            </TextStyled>

            <TextStyled tag="p" fontType="headlineBold" color="greyOne">
              {user.course_module}
            </TextStyled>
          </Container>
        </div>

        <Container>
          <TextStyled tag="h2" fontType="titleOne" color="greyZero">
            Que pena! Estamos em desenvolvimento {":("}
          </TextStyled>

          <TextStyled tag="p" fontType="textDefault" color="greyZero">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </TextStyled>
        </Container>
      </main>
    </DashboardStyled>
  );
};
