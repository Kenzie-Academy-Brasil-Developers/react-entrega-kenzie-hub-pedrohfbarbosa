import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { TechContext } from "../../Providers/TechContext";
import { ContainerMotion } from "../../components/ContainerMotion";
import { DashboardStyled } from "./styles";
import { DashboardLoading } from "./styles";

import { TextStyled } from "../../styles/globalComponents/Text/TextStyled";
import { UserContext } from "../../Providers/UserContext";
import { DashboardHeader } from "../../components/Header/DashboardHeader";
import { DashInfo } from "../../components/DashInfo";
import { TechList } from "../../components/TechList";
import { Modal } from "../../components/Modal";

export const Dashboard = () => {
  const { user, isLoadingDashboard } = useContext(UserContext);

  if (isLoadingDashboard) {
    return (
      <DashboardLoading>
        <TextStyled tag="h2" color="greyZero" fontType="titleOne">
          Carregando...
        </TextStyled>
      </DashboardLoading>
    );
  }
  console.log(user);
  return !user ? (
    <Navigate to="/" />
  ) : (
    <ContainerMotion>
      <Modal title="teste"/>
      <DashboardStyled>
        <DashboardHeader />

        <main>
          <DashInfo />

          <TechList />
        </main>
      </DashboardStyled>
    </ContainerMotion>
  );
};
