import React from "react";

const Index = () => {
  return (
    <>
      <p className="mt-2 mb-1 text-center main-heading">GEOPATIAL DATA</p>
      <div className="d-flex m-auto sub-section">
        <div className="project-by-box ">
          <p className="text-center main-title">BY SECTOR</p>
          {/*<HighchartsReact highcharts={Highcharts} options={options} />*/}
        </div>
        <div className="project-by-box ">
          <p className="text-center main-title">BY REGION</p>
        </div>
        <div className="project-by-box ">
          <p className="text-center main-title">BY DEPARTMENT</p>
        </div>
      </div>
    </>
  );
};

export default Index;
