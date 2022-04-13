import React from "react";

const Index = () => {
  return (
    <div className="d-flex m-auto mt-3 sub-section">
      <div className=" project-detail-container">
        <p className="text-center main-title">OVERALL EFFICINCY</p>
        <p className=" text-center  sub-title">
          Number of projects managed the decentralized office
        </p>
      </div>
      <div className=" project-detail-container">
        <p className="text-center main-title">KEY STATS</p>

        <div className="d-flex flex-box">
          <div className="  project-box">
            <p className="text-white num">306</p>
            <p className="text-white num-title"># Staff</p>
          </div>
          <div className="  project-box">
            <p className="text-white num">39.34bn</p>
            <p className="text-white num-title">Amount in UA</p>
          </div>
          <div className="  project-box">
            <p className="text-white num">1,111</p>
            <p className="text-white num-title"># Project</p>
          </div>
        </div>
        <div className="location-area">
          <div className="location">
            <p className="location-text">153</p>
            <p className="location-para">AS # projects managed within centralized locations</p>
          </div>
          <div className="location">
            <p className="location-text">262</p>
            <p className="location-para">AS # projects managed within decentralized locations</p>
          </div>
        </div>
        <div className="location-area">
          <div className="location">
            <p className="location-text">5.42bn</p>
            <p className="location-para">AS UA amount managed within centralized locations</p>
          </div>
          <div className="location">
            <p className="location-text">15.59bn</p>
            <p className="location-para">AS UA amount managed within decentralized locations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
