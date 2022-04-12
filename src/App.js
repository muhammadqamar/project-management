import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Navbar from "./components/navbar";
import "./App.css";
function App() {
  const options = {
    chart: {
      type: "bar",
    },
    series: [
      {
        name: "Jane",
        data: [1, 2.5, 4],
      },
      {
        name: "John",
        data: [5, 7, 3],
      },
    ],
    title: {
      text: "Fruit Consumption",
    },
    xAxis: {
      categories: ["Apples", "Bananas", "Oranges"],
    },
    yAxis: {
      title: {
        text: "Fruit eaten",
      },
    },
  };

  return (
    <div className="App ">
      <Navbar />
      {/*<HighchartsReact highcharts={Highcharts} options={options} />*/}
      <div
        className="d-flex m-auto mt-3"
        style={{
          maxWidth: "1180px",
          justifyContent: "space-between",
        }}
      >
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
      <p
        className="mt-2 mb-1"
        style={{
          textAlign: "center",
          color: "#2187e5",
        }}
      >
        PROJECT NAALYSIS
      </p>
      <div
        className="d-flex m-auto "
        style={{
          maxWidth: "1180px",
          justifyContent: "space-between",
        }}
      >
        <div
          className=""
          style={{
            width: "386px",
            height: "320px",
            background: "#f2f2f2",
            border: "1px solid #b3b3b3",
          }}
        >
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <div
          className=""
          style={{
            width: "386px",
            height: "320px",
            background: "#f2f2f2",
            border: "1px solid #b3b3b3",
          }}
        ></div>
        <div
          className=""
          style={{
            width: "386px",
            height: "320px",
            background: "#f2f2f2",
            border: "1px solid #b3b3b3",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
