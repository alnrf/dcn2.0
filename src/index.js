import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import configureStore from "./redux/configureStore";

const store = configureStore();

const renderApp = () =>
  render(
    <Provider store={store}>
      <React.StrictMode>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </React.StrictMode>
    </Provider>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./App", renderApp);
}

renderApp();
