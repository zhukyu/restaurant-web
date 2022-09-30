import { Link } from "react-router-dom";

function Card({ props }) {
  return (
    <div className="card" style={{ width: "288px", height: "330px" }}>
      <img
        style={{ height: "220px" }}
        src={props.image}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        {/* <p className="card-text">
            {props.description}
          </p> */}
        <Link style={{width: "100%"}} className="btn btn-outline-success" to={`/restaurant/${props.id}`}>
          VIEW
        </Link>
      </div>
    </div>
  );
}

export default Card;
