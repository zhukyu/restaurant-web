import { Link } from "react-router-dom";
import image from "../../images/background-home.jpg"

function Navbar() {
  const contents = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "List",
      href: "/list",
    },
  ];
  const renderContent = () => {
    return contents.map((item, index) => {
      return (
        <li key={index} className="nav-item">
          <Link className="nav-link" to={item.href} style={{ color: "#fff" }}>
            {item.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
        <div className="container">
          <a className="navbar-brand" href="#!">
            <span style={{ color: "#33FF99", fontWeight: "bold" }}>
              Restaurant
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              {renderContent()}
            </ul>
          </div>
        </div>
      </nav>
      <section>
        <div
          id="intro"
          className="bg-image vh-100"
          style={{
            backgroundImage:
              `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(250, 182, 162, 0.15)" }}
          ></div>
        </div>
      </section>
    </header>
  );
}

export default Navbar;
