import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../Providers/UserContext";
import { ProtectedLoading } from "./style";
import { TextStyled } from "../../styles/globalComponents/Text/TextStyled";

export const ProtectedRoutes = () => {
  const { user, isLoadingPage } = useContext(UserContext);

  if (isLoadingPage) {
    return (
      <ProtectedLoading>
        <TextStyled tag="h2" color="greyZero" fontType="titleOne">
          Carregando...
        </TextStyled>
      </ProtectedLoading>
    );
  }

  return user ? <Outlet /> : <Navigate to="/" />;
};
