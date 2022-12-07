import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TechContext } from "../../../Providers/TechContext";
import { schemaEdit } from "./schema";
import { Modal } from "..";
import { Form } from "../../../styles/globalComponents/Form/FormStyled";
import { InputWrapper } from "../../InputWrapper";
import { Input } from "../../../styles/globalComponents/Input/InputStyled";
import { Select } from "../../../styles/globalComponents/Select/SelectStyled";
import { Button } from "../../../styles/globalComponents/Button/ButtonStyled";

export const ModalEdit = () => {
  const { editTech, setEditTech, handleEdit, isLoadingEdit } =
    useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schemaEdit),
  });

  return (
    <Modal setModalId={setEditTech} title="Editar tecnologia">
      <Form onSubmit={handleSubmit(handleEdit)}>
        <InputWrapper label="Nome" htmlFor="title" error={errors.title}>
          <Input
            type="title"
            id="title"
            placeholder="Digite sua nova tecnologia"
            value={editTech.title}
            disabled
          />
        </InputWrapper>

        <InputWrapper
          label="Selecionar status"
          htmlFor="status"
          error={errors.status}
        >
          <Select id="status" {...register("status")}>
            <option value="">Selecione seu status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
        </InputWrapper>

        <Button type="submit" btnType="primary">
          {isLoadingEdit ? "Carregando..." : "Editar tecnologia"}
        </Button>
      </Form>
    </Modal>
  );
};
