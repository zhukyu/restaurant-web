import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../requestHttp";

function Restaurant() {
  const [restaurant, setRestaurant] = useState();
  let { id } = useParams();
  useEffect(() => {
    API.get(`home/restaurant/${id}`).then((res) => {
      setRestaurant(res.data);
    });
  }, []);
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={
                  restaurant
                    ? restaurant.image
                    : "https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
                }
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <h2 className="display-5 fw-bolder">
                {restaurant ? restaurant.name : "Loading..."}
              </h2>
              <div className="small fs-5">
                <span>
                  Address: {restaurant ? restaurant.address : "Loading..."}
                </span>
              </div>
              <div className="small mb-3">
                Phone: {restaurant ? restaurant.phoneNumber : "Loading..."}
              </div>
              <p className="lead">
                {restaurant ? restaurant.description : "Loading..."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Restaurant;
