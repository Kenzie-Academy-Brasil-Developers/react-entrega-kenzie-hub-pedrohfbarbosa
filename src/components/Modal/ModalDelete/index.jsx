import React from "react";
import { useContext } from "react";

import { Modal } from "..";
import { TechContext } from "../../../Providers/TechContext";

import { Button } from "../../../styles/globalComponents/Button/ButtonStyled";
import { TextStyled } from "../../../styles/globalComponents/Text/TextStyled";
import { ModalDeleteBody } from "./style";

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
