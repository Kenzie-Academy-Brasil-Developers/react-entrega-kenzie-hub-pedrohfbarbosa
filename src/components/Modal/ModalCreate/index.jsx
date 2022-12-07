import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Modal } from "..";
import { TechContext } from "../../../Providers/TechContext";
import { Form } from "../../../styles/globalComponents/Form/FormStyled";
import { InputWrapper } from "../../InputWrapper";
import { Input } from "../../../styles/globalComponents/Input/InputStyled";
import { Select } from "../../../styles/globalComponents/Select/SelectStyled";
import { schemaCreate } from "./schema";
import { Button } from "../../../styles/globalComponents/Button/ButtonStyled";

export const ModalCreate = () => {
  const { setIsModalCreate, handleCreate, isLoadingCreate } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schemaCreate),
  });

  return (
    <Modal setModalId={setIsModalCreate} title="Cadastrar tecnologia">
      <Form onSubmit={handleSubmit(handleCreate)}>
        <InputWrapper label="Nome" htmlFor="title" error={errors.title}>
          <Input
            type="title"
            id="title"
            placeholder="Digite sua nova tecnologia"
            {...register("title")}
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
          {isLoadingCreate ? "Carregando..." : "Cadastrar tecnologia"}
        </Button>
      </Form>
    </Modal>
  );
};
