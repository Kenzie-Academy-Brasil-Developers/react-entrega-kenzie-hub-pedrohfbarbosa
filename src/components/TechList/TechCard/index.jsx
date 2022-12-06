import { CardStyled } from "./style";
import { TextStyled } from "../../../styles/globalComponents/Text/TextStyled";
import { FiEdit2 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { CardButton } from "../../../styles/globalComponents/Button/CardButton";

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
          <CardButton>
            <FiEdit2 />
          </CardButton>
          <CardButton>
            <BsTrash />
          </CardButton>
        </div>
      </div>
    </CardStyled>
  );
};
