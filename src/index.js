import React from "react";
import ReactDOM from "react-dom";
import { MainStoreProvider } from "./Stores/main";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import App from "./components/app";

import "normalize";

import "./styles.scss";

const theme = createMuiTheme({
  palette: {
    error: {
      main: "#800000"
    },
    primary: {
      light: "#1ba9de",
      main: "#1796c6",
      dark: "#1886b0",
      contrastText: "#fff"
    },
    secondary: {
      light: "#34e03d",
      main: "#2fcc38",
      dark: "#29b131",
      contrastText: "#000"
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <MainStoreProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MainStoreProvider>
  </React.StrictMode>,
  rootElement
);
