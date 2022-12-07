import { Routes } from "./routes";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/themes";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
};
