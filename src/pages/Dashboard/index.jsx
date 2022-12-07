import { useContext } from "react";
import { TechContext } from "../../Providers/TechContext";
import { ContainerMotion } from "../../components/ContainerMotion";
import { DashboardStyled } from "./styles";
import { DashboardHeader } from "../../components/Header/DashboardHeader";
import { DashInfo } from "../../components/DashInfo";
import { TechList } from "../../components/TechList";
import { ModalCreate } from "../../components/Modal/ModalCreate";
import { ModalEdit } from "../../components/Modal/ModalEdit";
import { ModalDelete } from "../../components/Modal/ModalDelete";

export const Dashboard = () => {
  const { isModalCreate, editTech, deleteTech } = useContext(TechContext);

  return (
    <ContainerMotion>
      <DashboardStyled>
        <DashboardHeader />

        <main>
          <DashInfo />

          <TechList />
        </main>
      </DashboardStyled>

      {isModalCreate && <ModalCreate />}
      {editTech && <ModalEdit />}
      {deleteTech && <ModalDelete />}
    </ContainerMotion>
  );
};
