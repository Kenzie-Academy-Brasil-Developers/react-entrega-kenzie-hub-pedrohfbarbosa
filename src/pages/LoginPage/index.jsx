import { motion } from "framer-motion";
import { useState } from "react";
import { Logo } from "../../components/Logo";
import { LoginPageStyled } from "./styles";
import { FormLogin } from "./FormLogin";
import { TextStyled } from "../../styles/globalComponents/Text/TextStyled";
import { Link } from "../../styles/globalComponents/Link/LinkStyled";
export const LoginPage = ({ setUser }) => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <LoginPageStyled>
        <TextStyled tag="h2" color="greyZero" fontType="titleOne">
          Carregando...
        </TextStyled>
      </LoginPageStyled>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .8 }}
    >
      <LoginPageStyled>
        <div>
          <Logo />
          <div>
            <TextStyled tag="h2" color="greyZero" fontType="titleOne">
              Login
            </TextStyled>

            <FormLogin setUser={setUser} setIsLoading={setIsLoading} />

            <TextStyled tag="span" color="greyZero" fontType="headline">
              Ainda não possui uma conta?
            </TextStyled>

            <Link to="/register" anchor="disabled">
              Cadastre-se
            </Link>
          </div>
        </div>
      </LoginPageStyled>
    </motion.div>
  );
};
