import React from "react";
import { BsArrowRight } from "react-icons/bs";
import virtuos from "../assets/virtuos.png";
import virtuos2 from "../assets/virtuos2.png";
import carrocel from "../assets/carrocel.png";
import carrocel3 from "../assets/carrocel3.png";
import processador from "../assets/cpu.png";
import gpu from "../assets/gpu.png";
import ram from "../assets/ram.png";
import ssd from "../assets/ssd.png";
import hdd from "../assets/hdd.png";
import dev from "../assets/dev.png";
import pesquisa from "../assets/pesquisa.png";
import saude from "../assets/saude.png";
import financeiro from "../assets/financeiro.png";

import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

import Card from "./Card";

export default function Release() {
  return (
    <div className="releases" id="about">
      <div className="release orange">
        <ul className="content-2">
          <h2 className="title">
            Melhor custo-benefício na categoria de alta performance.
          </h2>
          <div className="reference">
            <li className="description-2">
              <div className="img-logo">
                <img src={dev} />
              </div>
              <div>
                <p>Desenvolvedores de Softwares</p>
              </div>
            </li>
            <li className="description-2">
              <div className="img-logo">
                <img src={financeiro} />
              </div>
              <div>
                <p>Mercado Financeiro e Traders</p>
              </div>
            </li>
            <li className="description-2">
              <div className="img-logo">
                <img src={pesquisa} />
              </div>
              <div>
                <p>Pesquisa e Desenvolvimento</p>
              </div>
            </li>
            <li className="description-2">
              <div className="img-logo">
                <img src={saude} />
              </div>
              <div>
                <p>Saúde e Ciência</p>
              </div>
            </li>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=555430466350&text=Ol%C3%A1.%20Estou%20no%20site%20da%20Razor%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            className="link"
            rel="noreferrer"
          >
            SAIBA MAIS <BsArrowRight />
          </a>
        </ul>

        <div className="image">
          <Carousel>
            <Carousel.Item>
              <img src={virtuos} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={virtuos2} />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="release green">
        <div className="image">
          <Carousel>
            <Carousel.Item>
              <img src={carrocel} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={carrocel3} />
            </Carousel.Item>
          </Carousel>
        </div>

        <ul className="content-2">
          <h2 className="title">
            Desenvolvido para as exigências de processamento mais elevadas.
          </h2>
          <div className="reference">
            <li className="description-2">
              <div className="img-logo">
                <img src={processador} />
              </div>
              <div>
                <p>
                  Threadripper PRO 5975WX
                  <br />
                  AMD® Ryzen™
                </p>
              </div>
            </li>
            <li className="description-2">
              <div className="img-logo">
                <img src={gpu} />
              </div>
              <div>
                <p>
                  RTX 3090 <br /> Nvidia® Geforce™
                </p>
              </div>
            </li>
            <li className="description-2">
              <div className="img-logo">
                <img src={ram} />
              </div>
              <div>
                <p>
                  DDR4 3200MHz <br />
                  128GB DE MEMÓRIA RAM
                </p>
              </div>
            </li>
            <li className="description-2">
              <div className="img-logo">
                <img src={ssd} />
              </div>
              <div>
                <p>
                  2TB Workstation Class
                  <br />
                  SSD M.2 PCIe X4 NVMe
                </p>
              </div>
            </li>

            <li className="description-2">
              <div className="img-logo">
                <img src={hdd} />
              </div>
              <div>
                <p>
                  HDD 6TB 5900RPM
                  <br />
                  256MB SATA III
                </p>
              </div>
            </li>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=555430466350&text=Ol%C3%A1.%20Estou%20no%20site%20da%20Razor%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            className="link"
            rel="noreferrer"
          >
            SAIBA MAIS <BsArrowRight />
          </a>
        </ul>
      </div>
    </div>
  );
}
