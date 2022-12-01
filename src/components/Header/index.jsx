import { HeaderStyled } from "./styles";
import { Logo } from "../Logo";

export const Header = ({ children }) => {
  return (
    <HeaderStyled>
      <Logo />
      {children}
    </HeaderStyled>
  );
};
