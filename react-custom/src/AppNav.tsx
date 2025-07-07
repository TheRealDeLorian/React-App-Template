import { Link } from "react-router-dom";

const AppNav = () => {
  return (
    <div className="bg-secondary">
      <nav className="py-2 navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-auto btn btn-secondary">
              <Link
                className="nav-link d-flex flex-column align-items-center"
                to="/"
              >
                <span>Home</span>
              </Link>
            </div>
            <div className="col-auto btn btn-secondary">
              <Link
                className="nav-link d-flex flex-column align-items-center"
                to="/about"
              >
                <span>About</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};


export default AppNav;
