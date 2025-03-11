import React from "react";
import "./InteriorSection.css";
import logo from "../assets/logo with stars3.png";

const InteriorSection = () => {
  return (
    <div className="interior_1">
      <div className="responsive-container-block big-container">
        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 right-one">
          <div className="content-box">
            <p className="text-blk section-head">Welcome to STRATHcube</p>
            <p className="text-blk">
              Scotland's first student led satellite
            </p>
          </div>
        </div>
        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 img-one">
          
            <img src={logo} alt="CubeSat Mission Logo" className="big-sofa" />
        
        </div>
      </div>
    </div>
  );
};

export default InteriorSection;
