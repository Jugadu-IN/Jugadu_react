import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import Team from "./Team";
import Header from "./Header.jsx";
import Teamcards, { OldTeam } from "./Teamcards";
import Footer from "./Footer";
function Ourteam() {
  function handler(card) {
    return (
      <Team
        image={card.image}
        name={card.name}
        position={card.Position}
        location={card.Location}
        description={card.description}
        link={card.Link}
      />
    );
  }
  return (
    <div>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta
        name="title"
        content="Jugadu.in | The affordable solution for all your tech needs"
      />
      <meta
        name="description"
        content="Jugadu.in aims to provide solution to your tech needs with our services to help your business with a website and E-commerce solution for your business"
      />
      <meta
        name="keywords"
        content="jugadu,jugad,jugaad,website development in delhi,ecommerce development in delhi,ecommerce solution,affordable dynamic website,custom ecommerce"
      />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="15 days" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <Header />
      <div className="text-center">
        <h2 className="Heading">Our Team</h2>
      </div>
      <div
        style={{ widh: "100%", textAlign: "center", marginTop: "0%" }}
        className="Team justify-content-center container"
      >
        <div className="row">{Teamcards.map(handler)}</div>
      </div>

      <div className="text-center">
        <h2 className="Heading">Past Interns</h2>
      </div>
      <div
        style={{ widh: "100%", textAlign: "center", marginTop: "0%" }}
        className="Team justify-content-center container"
      >
        <div className="row">{OldTeam.map(handler)}</div>
      </div>

      <Footer />
    </div>
  );
}
export default Ourteam;
