import * as yup from "yup";

export const schemaCreate = yup.object().shape({
  title: yup.string().required("Campo obrigatório"),
  status: yup.string().required("Selecione seu status"),
});
