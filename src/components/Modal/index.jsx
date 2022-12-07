import { useRef } from "react";

import { TextStyled } from "../../styles/globalComponents/Text/TextStyled";
import { ModalStyled, ModalWrapper } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { CardButton } from "../../styles/globalComponents/Button/CardButton";
import { ContainerMotion } from "../ContainerMotion";

export const Modal = ({ children, title, setModalId }) => {
  const ref = useRef(null);

  const handleOutClick = (e) => {
    if (!ref.current.contains(e.target)) {
      setModalId(null);
    }
  };

  const handleClick = () => {
    setModalId(null);
  };

  return (
    <ContainerMotion>
      <ModalStyled onClick={handleOutClick}>
        <ModalWrapper ref={ref}>
          <div>
            <TextStyled tag="h3" color="greyZero" fontType="titleThree">
              {title}
            </TextStyled>
            <CardButton onClick={handleClick}>
              <AiOutlineClose />
            </CardButton>
          </div>
          <div>{children}</div>
        </ModalWrapper>
      </ModalStyled>
    </ContainerMotion>
  );
};
