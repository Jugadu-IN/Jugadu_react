import React from "react";
import { Card } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import "./CardSection.css";
import BannerImg from "./BoostBanner.png";

const CardSection = () => (
  <div>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    ></meta>
    <Header />

    <div className="conatiner banner-image align-items-center">
      <img src={BannerImg} className="col-md-12" style={{ width: "50rem" }} />
    </div>


    <div className="d-flex">
      <div className="container card-section col-md-10">
        <div
          className="row justify-content-center"
          style={{ margin: "20px", marginRight: "auto", marginLeft: "auto" }}
        >
          <Card
            style={{ width: "18rem" }}
            className="col-md-3 scroll"
            style={{
              margin: "20px",
              maxHeight: "27rem",
              overflowY: "auto",
              backgroundColor: "",
              border: "none",
            }}
          >
            <Card.Body>
              <Card.Title className="class-title">
                {" "}
                Business Value Pack
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">3999/-</Card.Subtitle>
              <Card.Text>
                <ul>
                  <li>Static Content Website</li>
                  <li>Beautiful & Responsive designs</li>
                  <li>Single Page Website</li>
                  <li>1 Email ID</li>
                  <li>Hosting at 99 Rs./month (Billed Yearly)</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "18rem" }}
            className="col-md-3 scroll" 
            style={{
              margin: "20px",
              maxHeight: "27rem",
              overflowY: "auto",
              backgroundColor: "",
              border: "none",
            }}
          >
            <Card.Body>
              <Card.Title className="class-title">Essentials Pack</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">5999/-</Card.Subtitle>
              <Card.Text>
                <ul>
                  <li> Dynamic Website ( Editable Content )[2 components]</li>
                  <li>Single Page Website</li>
                  <li>Free .jugadu.in subdomain</li>
                  <li>2 Email IDs</li>
                  <li>Hosting at 99 Rs./month (Billed Yearly)</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "18rem" }}
            className="col-md-3 scroll"
            style={{
              margin: "20px",
              maxHeight: "27rem",
              overflowY: "auto",
              backgroundColor: "",
              border: "none",
            }}
          >
            <Card.Body>
              <Card.Title className="class-title">Dope Pack</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"> 6999/-</Card.Subtitle>
              <Card.Text>
                <ul>
                  <li>
                    Dynamic Website ( Editable Content )[5 components-1 max
                    Image Based]
                  </li>
                  <li>3 Email IDs</li>
                  <li>Free SSL(https://)</li>
                  <li>Upto 5 web pages</li>
                  <li>Responsive Design</li>
                  <li>Hosting at 99 Rs./month (Billed Yearly)</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div
          className="row justify-content-center"
          style={{ marginRight: "auto", marginLeft: "auto" }}
        >
          <Card
            style={{ width: "18rem" }}
            className="col-md-3 scroll "
            style={{
              margin: "20px",
              maxHeight: "27rem",
              overflowY: "auto",
              backgroundColor: "",
              border: "none",
            }}
          >
            <Card.Body>
              <Card.Title className="class-title">
                GOAT(Greatest Of All Time) Pack
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">9999/-</Card.Subtitle>
              <Card.Text>
                <ul>
                  <li>Everything in Jugadu Boost - Dope Pack</li>
                  <li>Free hosting for the first 3 months.</li>
                  <li>5 Email IDs</li>
                  <li>SEO optimized website</li>
                  <li>Super fast loading time</li>
                  <li>1 User Submitted Form</li>
                  <li>
                    Dynamic Website ( Editable Content )[8 components - 3 max
                    Image Based]
                  </li>
                  <li>Upto 10 web pages</li>
                  <li>Free Analytics</li>
                  <li>Hosting at 149 Rs./month (Billed Yearly)</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "18rem" }}
            className="col-md-3 scroll"
            style={{
              margin: "20px",
              maxHeight: "27rem",
              overflowY: "auto",
              backgroundColor: "",
              border: "none",
            }}
          >
            <Card.Body>
              <Card.Title className="class-title">
                Mood (Custom website)
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Custom Pricing
              </Card.Subtitle>
              <Card.Text>
                <ul>
                  <li>SEO optimized website</li>
                  <li>Super fast loading time</li>
                  <li>
                    Dynamic Website ( Editable Content )[Custom Components]
                  </li>
                  <li>Choice of premium templates or Custom design</li>
                  <li>On demand custom features</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "18rem" }}
            className="col-md-3 scroll"
            style={{
              margin: "20px",
              maxHeight: "27rem",
              overflowY: "auto",
              backgroundColor: "",
              border: "none",
            }}
          >
            <Card.Body>
              <Card.Title className="class-title">Jugadu Add Ons</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
              <Card.Text>
                <ul>
                  <li>
                    {" "}
                    Payment Gateway - Rs. 2999/- + 0.75% ( ours/transaction ) +
                    (% transaction/provider)
                  </li>
                  <li>
                    Lightning Load Package - Faster load times help with SEO -
                    Rs. 399/-
                  </li>
                  <li>
                    {" "}
                    Basic SEO Package - Faster load time, SEO Optimised content,
                    SEO oriented caching - Rs. 1000/-
                  </li>
                  <li>Maps - Rs. 399 + API Key Charges</li>
                  <li>
                    Email ID - Rs. 10/- per Email / per month (Billed yearly)
                  </li>
                  <li>Whatsapp Message - Rs. 399</li>
                  <li>Social media Integration - Rs. 499</li>
                  <li>Removal of Jugadu Banner - Rs. 1999</li>
                  <li>User Submitted Forms - Rs. 699/- per form</li>
                  <li>Analytics - Rs. 1499</li>
                  <li>
                    New Website Page - Rs. 399 ( Non-editable) | Rs. 599 (
                    Editable )
                  </li>
                  <li>
                    @999/- Basic Yearly Maintenance ( Bug Fixes + Backend
                    Updates )
                  </li>
                  <li>Basic Yearly Maintenance - Customizable</li>
                  <li>Blog - Customizable</li>
                  <li>Content - Customizable</li>
                  <li>Custom UI design - Customizable</li>
                  <li>Targeted SEO - Customizable</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>

    <Footer style={{ paddingTop: "1000px" }} className="pt-5" />
  </div>
);

export default CardSection;
