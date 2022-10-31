import React from "react";
import { useState } from "react";
import home from "../assets/home.png";

const Timer = () => {
  const TEMPO_TOTAL = 300;

  let [tempoRestante, setTempoRestante] = useState(TEMPO_TOTAL);
  const startTimer = () => {
    setTimeout(() => {
      if (tempoRestante > 0) {
        setTempoRestante((tempoRestante -= 1));
      }
    }, 1000);
  };

  const formataTempo = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  };

  const calculaFracao = () => {
    return tempoRestante / TEMPO_TOTAL;
  };

  startTimer();
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">Não perca essa oportunidade</p>
          <h1 className="title">
            Adquira agora o seu
            <span className="sub-title"> RAZOR VIRTUOS!</span>
          </h1>
          <p className="description">Faça sua encomenda!</p>
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
            <div className="base-timer">
              <span id="base-timer-label" className="base-timer__label">
                {formataTempo(tempoRestante)}
              </span>
            </div>
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timer;
