import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import virtuos01 from "../assets/virtuos01.png";
import virtuos04 from "../assets/virtuos04.png";
import virtuos02 from "../assets/virtuos02.png";
import virtuos03 from "../assets/virtuos03.png";
function Group() {
  return (
    <div className="container">
      <div className="description">
        <h2 className="title">Design sem frescura</h2>
        <p className="sub-title">Menos RGB, mais performance.</p>
      </div>
      <div className="card-home">
        <Card>
          <Card.Img variant="top" src={virtuos01} />
          <Card.Body>
            <Card.Title>
              <span>Minimalista</span>
            </Card.Title>
            <Card.Text>Sem pisca-pisca</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={virtuos04} />
          <Card.Body>
            <Card.Title>Design</Card.Title>
            <Card.Text>Clean</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={virtuos02} />
          <Card.Body>
            <Card.Title>Fácil acesso</Card.Title>
            <Card.Text>Cable Management</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={virtuos03} />
          <Card.Body>
            <Card.Title>Proteção</Card.Title>
            <Card.Text>
              <span>Heavy Duty</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Group;
