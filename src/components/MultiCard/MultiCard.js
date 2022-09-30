import axios from "axios";
import { Carousel } from "bootstrap";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import style from "./MultiCard.css";

function MultiCard() {
  const [listRestaurant, setListRestaurant] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/restaurants").then((res) => {
      setListRestaurant(res.data);
    });
  }, []);
  const renderCard = () => {
    return listRestaurant.map((item, index) => {
      return (
        <div key={index} className="p-2">
          <Card props={item} />
        </div>
      );
    });
  };
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-flex flex-row justify-content-center">
            {renderCard()}
            {/* <div className="p-2">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://www.americarestaurant.ca/wp-content/uploads/2022/04/Sportsnet-Grill.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://www.americarestaurant.ca/wp-content/uploads/2022/04/Sportsnet-Grill.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://www.americarestaurant.ca/wp-content/uploads/2022/04/Sportsnet-Grill.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex flex-row justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://www.americarestaurant.ca/wp-content/uploads/2022/04/The-Carbon-Bar.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://www.americarestaurant.ca/wp-content/uploads/2022/04/The-Carbon-Bar.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://www.americarestaurant.ca/wp-content/uploads/2022/04/The-Carbon-Bar.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex flex-row justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://www.americarestaurant.ca/wp-content/uploads/2022/04/Ruths-Chris-Steak-House.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://www.americarestaurant.ca/wp-content/uploads/2022/04/Ruths-Chris-Steak-House.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://www.americarestaurant.ca/wp-content/uploads/2022/04/Ruths-Chris-Steak-House.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        style={{
          backgroundColor: "#157347",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          top: "50%",
          marginLeft: "100px",
        }}
        className="carousel-control-prev"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a
        style={{
          backgroundColor: "#157347",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          top: "50%",
          marginRight: "100px",
        }}
        className="carousel-control-next"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  );
}

export default MultiCard;
