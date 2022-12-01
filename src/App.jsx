import { useState } from "react";
import { Routes } from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes";

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
