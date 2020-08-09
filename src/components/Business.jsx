import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./styles.css";
import Cards from "./Cards"
import content from "./content";

function Business(){
return <div className="">
        <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-tittle text-center">
                            <h2 style={{paddingTop:"100px",color: "#2b4b80",fontSize: "50px",fontWeight:"700"}}>What We Will Do For Your<br /> Business​?</h2>
                        <div className="row pt-5 pb-5 business  ">
                        <div className="col-lg-4 col-xs-6 boxy">
                        <Cards title={content[0].title} description={content[0].description} />
                        </div>
                        <div className="col-lg-4 col-xs-6 boxy">
                        <Cards title={content[1].title} description={content[1].description}  />
                        </div>
                        <div className="col-lg-4  col-xs-6 boxy">
                        <Cards title={content[2].title} description={content[2].description}  />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-xs-6 boxy">
                        <Cards title={content[3].title} description={content[3].description} />
                        </div>
                        <div className="col-lg-4 col-xs-6 boxy ">
                        <Cards title={content[4].title} description={content[4].description}  />
                        </div>
                        <div className="col-lg-4  col-xs-6 boxy">
                        <Cards title={content[5].title} description={content[5].description}  />
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
</div>
}
export default Business;