import React from "react";
import home from "../assets/home.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">A Nova era de PC Razor chegou! </p>
          <h1 className="title">
            Adquira agora o seu <span className="sub-title">RAZOR VIRTUOS</span>
          </h1>

          <button>
            <a
              class="nav-link"
              aria-disabled="false"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=555430466350&text=Ol%C3%A1.%20Estou%20no%20site%20da%20Razor%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              rel="noreferrer"
            >
              Consulte-nos
            </a>
          </button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
