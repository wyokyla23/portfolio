import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles'
import Container from "./components/layouts/Container";
import Main from "./components/layouts/Main";
import logo from "./logo.svg";
import theme from './theme'
import "./App.css";

import MainRouter from "./router/MainRouter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Main>
          <MainRouter />
        </Main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
