import * as yup from "yup";

export const schemaEdit = yup.object().shape({
  status: yup.string().required("Selecione seu status"),
});
