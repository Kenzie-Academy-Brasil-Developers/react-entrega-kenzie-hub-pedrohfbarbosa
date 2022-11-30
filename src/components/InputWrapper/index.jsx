import { TextStyled } from "../../styles/globalComponents/Text/TextStyled";

export const InputWrapper = ({ children, label, error }) => {
  return (
    <div>
      <TextStyled type="label" color="greyZero" fontType="headline">
        {label}
      </TextStyled>
      {children}
      {error && (
        <TextStyled type="span" color="greyZero" fontType="headline">
          {error.message}
        </TextStyled>
      )}
    </div>
  );
};
