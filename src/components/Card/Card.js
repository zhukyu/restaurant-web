import { Link } from "react-router-dom";
import "./Card.css";
function Card({ props }) {
  return (
    <div
      className="card"
      style={{ width: "350px", minHeight: "300px", margin: "auto" }}
    >
      <img
        style={{ height: "220px" }}
        src={props.image}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <span className="star-rating">
          <span style={{ width: `${props.rating}` }}></span>
        </span>
        <Link
          style={{ width: "100%" }}
          className="btn btn-outline-success"
          to={`/restaurant/${props.id}`}
        >
          VIEW
        </Link>
      </div>
    </div>
  );
}

export default Card;
