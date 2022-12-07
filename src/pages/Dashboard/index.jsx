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

import { ModalCreate } from "../../components/Modal/ModalCreate";
import { ModalEdit } from "../../components/Modal/ModalEdit";
import { ModalDelete } from "../../components/Modal/ModalDelete";

export const Dashboard = () => {
  const { user, isLoadingDashboard } = useContext(UserContext);
  const { isModalCreate, editTech, deleteTech } = useContext(TechContext);

  if (isLoadingDashboard) {
    return (
      <DashboardLoading>
        <TextStyled tag="h2" color="greyZero" fontType="titleOne">
          Carregando...
        </TextStyled>
      </DashboardLoading>
    );
  }

  return !user ? (
    <Navigate to="/" />
  ) : (
    <ContainerMotion>
      {isModalCreate && <ModalCreate />}
      {editTech && <ModalEdit />}
      {deleteTech && <ModalDelete />}
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
