import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  const links = [
    {
      title: "Contato",
      data: [
        "(54) 3046-6350",
        "atendimento@razorcomputadores.com.br",
        "Rua Dr. Plínio Moura, 153C",
        "Passo Fundo,RS",
      ],
    },
    {
      title: "Sobre",
      data: ["Sobre", "Termos", "Legal"],
    },

    {
      title: "Rede Social",
      data: ["Twitter", "Instagram"],
    },
  ];
  const socialLink = [<BsFacebook />, <BsTwitter />, <BsInstagram />];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <p></p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Todos direitos reservados 2022 </span>
        <span> Brasil 2022</span>
      </div>
    </footer>
  );
}
