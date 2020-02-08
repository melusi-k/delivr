import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Firebase, { FirebaseContext } from "./components/Firebase";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { DarkTheme, ThemeProvider /*styled*/ } from "baseui";

const engine = new Styletron();
//const Centered = styled("div", {
//  display: "flex",
//  justifyContent: "center",
//  alignItems: "center",
//  height: "100%"
//});

ReactDOM.render(
  <StyletronProvider value={engine}>
    <ThemeProvider theme={DarkTheme}>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    </ThemeProvider>
  </StyletronProvider>,
  document.getElementById("root")
);
