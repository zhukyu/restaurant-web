import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import API from "../../requestHttp";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function MultiCard() {
  const [listRestaurant, setListRestaurant] = useState([]);
  useEffect(() => {
    API.get("home/restaurant").then((res) => {
      setListRestaurant(res.data);
    });
  }, []);
  const renderCard = () => {
    return listRestaurant.map((item, index) => {
      return (
        <div key={index} className="item">
          <Card props={item} />
        </div>
      );
    });
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
      >
        {renderCard()}
      </Carousel>
    </div>
  );
}

export default MultiCard;
