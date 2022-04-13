import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const Index = () => {
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
  };

  const options1 = {
    chart: {
      type: "bar",
    },
    title: {
      text: "BY REGION",
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

    xAxis: {
      categories: ["Apples", "Bananas", "Oranges"],
    },
  };
  return (
    <>
      <p className="mt-2 mb-1 text-center main-heading">PROJECT ANALYSIS</p>
      <div className="d-flex m-auto sub-section">
        <div className="project-by-box ">
          <p className="text-center main-title">BY SECTOR</p>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <div className="project-by-box ">
          {/*<p className="text-center main-title">BY REGION</p>*/}
          <HighchartsReact highcharts={Highcharts} options={options1} />
        </div>
        <div className="project-by-box ">
          <p className="text-center main-title">BY DEPARTMENT</p>
        </div>
      </div>
    </>
  );
};

export default Index;
