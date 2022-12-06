import styled from "styled-components";

export const ModalStyled = styled.div`
  height: 100vh;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color:${({theme}) => theme.modalBg};
`

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 23.0625rem;
  
  border-radius: ${({theme}) => theme.radiusOne};
  background-color: ${({theme}) => theme.greyThree};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: hidden;

  & > div:nth-of-type(1){
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    background-color: ${({theme}) => theme.greyTwo};
    min-height: 3.125rem;
  }

  & > div:nth-of-type(2){
    padding: 1rem;   
  }
`