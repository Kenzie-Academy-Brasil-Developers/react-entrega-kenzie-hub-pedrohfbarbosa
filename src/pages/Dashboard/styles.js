const { default: styled } = require("styled-components");

export const DashboardStyled = styled.div`
  display: flex;
  flex-direction: column;

  & main > div:nth-of-type(1) {
    width: 100vw;
    height: 7.375rem;
    display: flex;
    align-items: center;
    border-top: 1px solid ${({theme}) => theme.greyThree};
    border-bottom: 1px solid ${({theme}) => theme.greyThree};
  }

  & main > div:nth-of-type(1) > div {
    display: flex;
    justify-content: space-between;
  }

  & main > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 1rem;
  }
`;
