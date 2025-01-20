import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./components/App"; // Ensure this path is correct
import "./styles/App.css"; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);