import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import MultiCard from "../components/MultiCard/MultiCard";

function Home() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Famous Restaurant</h1>
        </div>
      </div>

      <MultiCard />

      {/* <div className="d-flex flex-row justify-content-center">
        {renderCard()}
      </div> */}
    </div>
  );
}

export default Home;
