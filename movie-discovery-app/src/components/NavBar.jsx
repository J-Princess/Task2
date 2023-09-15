import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "./images/image (2).webp";
import PogoImg from "./images/image.webp";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-light d-flex">
            <img
              src={LogoImg}
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />{" "}
            <h2 style={{ margin: "5px 20px" }}>MovieBox </h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
            <form className="d-flex w-50 mx-auto" role="search">
              <input
                className="form-control me-2 text-light one"
                type="search"
                placeholder="What do you want to watch"
                aria-label="Search"
                style={{ background: "transparent" }}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item ">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <img
                    src={PogoImg}
                    alt="Logo"
                    width="30"
                    height="30"
                    className="d-inline-block align-text-top"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
