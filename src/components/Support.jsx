import React from "react";
import ReactPlayer from "react-player";
import home1 from "../assets/home12.png";
import home2 from "../assets/home22.png";
import logo from "../assets/avatares/logorza.png";
import Card from "./Card";

export default function Support() {
  return (
    <div className="like" id="suporte">
      <div className="container-2">
        <div className="content">
          <div className="image">
            <img src={home1} alt="eth1" />
          </div>
          <h2 className="title">Suporte nacional e garantia de dar inveja</h2>
          <p className="description">
            Na Razor você tem um pós-venda que funciona de verdade.
          </p>
          <p className="description">
            Nosso nível de satisfação é de dar inveja para os concorrentes
            gringos.
          </p>
        </div>
        <div className="content">
          <div className="image2">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=fR5YpOrcNXc"
              playing={true}
              loop={true}
              muted={true}
            />
          </div>
          <h2 className="title">
            As workstations que não tem medo de pegar no pesado
          </h2>
          <p className="description">
            Máquinas para uso em computação gráfica, renderização profissional,
            simulações em realtime, análises complexas de dados e softwares de
            alta exigência.
          </p>
          <p className="description"></p>
        </div>
      </div>
      <div className="button-sup">
        <img src={logo} className="logo"></img>
        <button>
          <a
            class="nav-link"
            aria-disabled="false"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=555430466350&text=Ol%C3%A1.%20Estou%20no%20site%20da%20Razor%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            rel="noreferrer"
          >
            Contato
          </a>
        </button>
      </div>
    </div>
  );
}
