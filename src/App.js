import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Free from "./components/Free";
import Home from "./components/Home";
import Equipe from "./components/Equipe";

import Support from "./components/Support";
import Navbar from "./components/Navbar";
import Release from "./components/Release";
import ScrollToTop from "./components/ScrollToTop";
import Timer from "./components/Timer";
import Group from "./components/Group";
import scrollreveal from "scrollreveal";
import "./sass/index.scss";

function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,,
        .free,
        .clients,
        .group,
        .releases,
        .support,
        .timer,
        .equipe,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />

      <Router>
        <Home />

        <Group />
        <Release />
        <Timer />
        <Free />
        <Clients />
        <Support />
        <Equipe />
        <Footer />
        <Routes>
          <Route path="/" element={<Equipe />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
