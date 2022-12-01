import { Fieldset } from "./styles";
import { TextStyled } from "../../styles/globalComponents/Text/TextStyled";

export const InputWrapper = ({ children, label, error, htmlFor }) => {
  return (
    <Fieldset color="greyZero" fontType="headline">
      <label htmlFor={htmlFor}>{label}</label>

      {children}

      {error && (
        <TextStyled tag="span" color="failure" fontType="headline">
          {error.message}
        </TextStyled>
      )}
    </Fieldset>
  );
};
