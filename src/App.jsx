import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainLayout from "./pages/MainLayout";
import Context, { DataContext } from "./context";
import LogIn from "./pages/LogIn";
import Content from "./layout/Content";

function App() {
  return (
    <>
      <Context>
        {/* <Content /> */}
        <MainLayout />
      </Context>
    </>
  );
}

export default App;
