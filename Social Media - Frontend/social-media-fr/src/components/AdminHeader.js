import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function AdminHeader() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={
        {
            "width": "100%",
            "height": "5vh",
            "padding": "0 20px",
        }
    }>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">
          Social Media App - Admin
        </a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/registrationlist">
              Registration Management <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/articlelist">
            Article Management
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/newslist">
            News Management
            </Link>
          </li>
        </ul>
      </div>
        <div
          className="user-header"
          style={{
            width: "5%",
            "height": "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="user-header__username text-light">
            <p>{username}</p>
          </div>
          <div className="user-header__logout">
            <Link to="/" onClick={logout}>
              <p>Logout</p>
            </Link>
          </div>
        </div>
    </nav>
  );
}

export default AdminHeader;
