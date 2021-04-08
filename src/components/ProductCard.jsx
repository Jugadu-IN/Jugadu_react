import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const ProductCard = (props) => (
  <div className="productCard">
    <Card className="card" style={{ width: "18rem" }} bg="light">
      <Card.Img variant="top" src={props.pic} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Link to={props.link}>
          {" "}
          <Button variant="warning">Learn More</Button>
        </Link>
      </Card.Body>
    </Card>
  </div>
);
export default ProductCard;
