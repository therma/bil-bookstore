import React from "react";
import "./App.css";
import { LoginScreen } from "./pages/login";
import { Header } from "./components/Header.component";

function App() {
  return (
    <>
      <Header title={""} username={""}></Header>
      <LoginScreen></LoginScreen>
    </>
  );
}

export default App;
