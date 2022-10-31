import React, { useState } from "react";
import { Nav, NavDropDown, Modal, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// import { Link } from "react-router-dom";
import man from "../assets/avatares/man.png";
import man1 from "../assets/avatares/man2.png";
import man2 from "../assets/avatares/man3.png";
import girl from "../assets/avatares/girl.png";
import bugcode from "../assets/avatares/bugcode.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/logo.png";

export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li>
            <a href="#about">SPECS</a>
          </li>
          <li>
            <a href="#suporte">SUPORTE</a>
          </li>
          <li>
            <a variant="white" onClick={() => setShow(true)}>
              Equipe
            </a>
            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
              className="links-modal"
              md={2}
            >
              <Modal.Header closeButton>
                <Modal.Title id="title-modal">
                  <img src={bugcode}></img>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row xs={2} md={2} className="g-4">
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={man} />
                      <Card.Body>
                        <Card.Title>Alisson Lopes</Card.Title>
                        <Card.Text>Desenvolvedor full stack</Card.Text>
                        <Button
                          variant="danger"
                          href="https://www.linkedin.com/in/alisson-lopes-dev/"
                          target="_blank"
                        >
                          Linkedin
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={man1} />
                      <Card.Body>
                        <Card.Title>Fábio Junior</Card.Title>
                        <Card.Text>Desenvolvedor front-end</Card.Text>
                        <Button
                          variant="danger"
                          href="https://www.linkedin.com/in/f%C3%A1bio-peres-desenvolvedor/"
                          target="_blank"
                        >
                          Linkedin
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={man2} />
                      <Card.Body>
                        <Card.Title>Wesley Tibolla</Card.Title>
                        <Card.Text>Desenvolvedor front-end</Card.Text>
                        <Button
                          variant="danger"
                          href="https://www.linkedin.com/in/wesley-tibolla-108975243/"
                          target="_blank"
                        >
                          Linkedin
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={girl} />
                      <Card.Body>
                        <Card.Title>Jiordana Duarte</Card.Title>
                        <Card.Text>Apresentadora</Card.Text>
                        <Button
                          variant="danger"
                          href="https://www.linkedin.com/in/alisson-lopes-dev/"
                          target="_blank"
                        >
                          Linkedin
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Modal.Body>
            </Modal>
          </li>
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
