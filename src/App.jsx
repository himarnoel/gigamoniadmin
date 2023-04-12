import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./DashboardPages/Home";
import NavBar from "./Components/Nav";
import NavPage from "./Pages/NavPage";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;
