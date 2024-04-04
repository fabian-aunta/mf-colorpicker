import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import ColorPicker from "./components/ColorPicker";

const App = () => (
  <div className="container">
    <ColorPicker/>
  </div>  
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
