import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { storeContacts } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeContacts.store}>
    <PersistGate loading="Loading..." persistor={storeContacts.persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
