import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { ButtonViewStyled } from "./styles";

export const ButtonViewPassword = ({ showPassword, setShowPassword }) => {
  const handleClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <ButtonViewStyled type="button" onClick={handleClick}>
        {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
      </ButtonViewStyled>
    </>
  );
};
