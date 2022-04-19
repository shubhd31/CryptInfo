import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import KommunicateChat from "./components/chat/chat";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <KommunicateChat />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
