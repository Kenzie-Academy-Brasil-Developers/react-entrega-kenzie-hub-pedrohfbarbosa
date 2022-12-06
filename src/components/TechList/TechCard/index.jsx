import { CardStyled } from "./style";
import { TextStyled } from "../../../styles/globalComponents/Text/TextStyled";

export const TechCard = ({ tech }) => {
  return (
    <CardStyled>
      <TextStyled tag="h3" fontType="titleThree" color="white">
        {tech.title}
      </TextStyled>
      <div>
        <TextStyled tag="span" fontType="headline" color="greyOne">
          {tech.status}
        </TextStyled>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </CardStyled>
  );
};
