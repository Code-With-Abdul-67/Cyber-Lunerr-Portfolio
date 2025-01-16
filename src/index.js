import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import { initializeAnalytics } from "./utils/analytics";
import reportWebVitals from './reportWebVitals';

// Initialize Google Analytics
initializeAnalytics(); // <- CALL the function here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
