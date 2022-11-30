import { Routes } from "./Routes";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <Routes user={user} setUser={setUser} />
      </ThemeProvider>
    </>
  );
};
