import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function UserHeader() {
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
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={
        {
            "width": "100%",
            "height": "5vh",
            "padding": "0 20px",
        }
    }>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">
          Social Media App
        </a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <Link class="nav-link" to="/userdashboard">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/userarticle">
              Add Article
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/news">
              News
            </Link>
          </li>
        </ul>
      </div>
        <div
          className="user-header"
          style={{
            width: "10%",
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
            <a type="button" class="btn btn-light">logout</a>
            </Link>
          </div>
        </div>
    </nav>
  );
}

export default UserHeader;
