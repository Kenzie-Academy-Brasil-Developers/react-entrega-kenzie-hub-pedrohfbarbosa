import { useContext } from "react";
import { FiEdit2 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { TechContext } from "../../../Providers/TechContext";
import { CardStyled } from "./style";
import { TextStyled } from "../../../styles/globalComponents/Text/TextStyled";
import { CardButton } from "../../../styles/globalComponents/Button/CardButton";

export const TechCard = ({ tech }) => {
  const { setEditTech, setDeleteTech } = useContext(TechContext);

  const handleOpenEditModal = () => {
    setEditTech(tech);
  };

  const handleOpenDeleteModal = () => {
    setDeleteTech(tech);
  };

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
          <CardButton onClick={handleOpenEditModal}>
            <FiEdit2 />
          </CardButton>

          <CardButton onClick={handleOpenDeleteModal}>
            <BsTrash />
          </CardButton>
        </div>
      </div>
    </CardStyled>
  );
};
