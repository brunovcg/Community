import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Providers from './providers';
import { ChakraProvider } from "@chakra-ui/react"


ReactDOM.render(
  <React.StrictMode>
      <Providers>
        <ChakraProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </ChakraProvider>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
