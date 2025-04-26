import React, { } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarComp from "./components/NavBarComp/NavBarComp";
import 'bootstrap/dist/css/bootstrap.min.css';
// import AboutComp from "./components/AboutComp/AboutComp";
import HomeComp from "./components/HomeComp/HomeComp";
import Users from "./components/Users/Users";
import AlertComp from "./components/Alert/AlertComp";
import "./App.css"
import LandingPage from "./components/LandingPage/LandingPage";
import ShopLandingPage from "./components/pages/ShopLandingPage/ShopLandingPage";
function App() {

  return (
    <div className="App">
      <BrowserRouter basename="">
        <br/>
        <br/>
        <div className="mb-3"></div>
        <Routes>
          <Route exact path="/" element={<HomeComp />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;



