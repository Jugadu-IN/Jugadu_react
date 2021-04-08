import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import bgright from "./BG_right.png";
import Services from "./Services.png";
import { Link } from "react-router-dom";
function Brandingdev() {
  return (
    <div>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <Header />

      <div className="">
        <div className="container">
          <div className="pb-5 row">
            <div className="col-lg-6">
              <img
                id="optionalstuff"
                className="w3-animate-left img-fluid col-sm-0"
                src={bgright}
                style={{ height: "400px", paddingTop: "", paddingLeft: "" }}
              />
            </div>
            <div className="col-lg-6 pt-5">
              <h1
                style={{ fontFamily: "'Rubik', sans-serif", color: "#3F3F3F" }}
              >
                Branding
              </h1>
              <p style={{ color: "#8F8F8F" }}>
                It is imperative for a brand to look distinct and strike a chord
                in the target audience. We help you find the BIG IDEA to
                position your brand in the market by creating the right look &
                feel and the voice for your brand.
                <ul>
                  {" "}
                  At Jugadu.in we provide the following branding services:
                  <li>
                    Visual Identity Design - Logo Design, Corporate Stationery
                    Design, Company Profile Design
                  </li>
                  <li>UI/UX Design</li>
                  <li>Packaging Design</li>
                  <li></li>
                  <li>Marketing Material Design</li>
                  <li>And more</li>
                </ul>
              </p>
              {/* <Link to="/contact"><button style={{backgroundColor:"#C77B00",color:"white"}} className="btn btn-lg ">Contact Us</button></Link> */}
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#f7f5fa" }} className="row">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1
                  className="pt-5"
                  style={{
                    fontFamily: "'Rubik', sans-serif",
                    color: "#3F3F3F",
                  }}
                >
                  Why Choose Jugadu for Your Website Development Needs?{" "}
                </h1>
                <h5
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    color: "#818181",
                  }}
                >
                  • Result-driven web development and web design services
                  <br /> • Completely scalable websites which will look equally
                  good on PCs and mobile devices <br /> • Websites that directly
                  appeal to your audience in conjunction with a strong backend{" "}
                  <br /> • Professional web developers who create future-ready
                  websites <br /> • Great comfort level and knowledge with all
                  contemporary web development platforms and coding languages{" "}
                  <br /> • Complete customization of all contemporary and
                  cutting-edge CMS solutions <br /> • Very fast and economical
                  work time
                </h5>
              </div>
              <div className="col-lg-6">
                <img
                  id="optionalstuff"
                  className="img-fluid col-sm-0"
                  src={Services}
                  style={{
                    height: "500px",
                    paddingTop: "50px",
                    paddingLeft: "30px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer style={{ paddingTop: "1000px" }} className="pt-5" />
    </div>
  );
}
export default Brandingdev;
