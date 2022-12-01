import * as yup from "yup";

export const schemaRegister = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Deve ter no mínimo 8 caracteres com letras, números e um símbolo"
    ),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password"), null], "Senhas devem ser iguais"),
  bio: yup.string().required("Bio obrigatório"),
  contact: yup.string().required("Contato obrigatório"),
  course_module: yup.string().required("Selecione seu módulo"),
});
