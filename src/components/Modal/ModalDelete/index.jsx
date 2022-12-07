import React from "react";
import { useContext } from "react";
import { TechContext } from "../../../Providers/TechContext";
import { Modal } from "..";
import { ModalDeleteBody } from "./style";
import { TextStyled } from "../../../styles/globalComponents/Text/TextStyled";
import { Button } from "../../../styles/globalComponents/Button/ButtonStyled";

export const ModalDelete = () => {
  const { deleteTech, setDeleteTech, handleDelete, isLoadingDelete } =
    useContext(TechContext);

  return (
    <Modal setModalId={setDeleteTech} title="Remover tecnologia">
      <ModalDeleteBody>
        <TextStyled tag="h3" fontType="titleTwo" color="greyOne">
          Tem certeza que deseja excluir a tecnologia {deleteTech.title} ?
        </TextStyled>

        <Button onClick={handleDelete} type="button" btnType="primary">
          {isLoadingDelete ? "Carregando..." : "Remover tecnologia"}
        </Button>
      </ModalDeleteBody>
    </Modal>
  );
};
