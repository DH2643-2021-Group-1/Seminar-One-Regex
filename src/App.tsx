import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { InputForm } from "./InputForm/InputForm";
import { AddressForm } from "./AddressForm/AddressForm";

function App() {
  return (
    <div className="App">
      <InputForm />
      <AddressForm />
    </div>
  );
}

export default App;
