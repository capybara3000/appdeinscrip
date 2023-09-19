import React from "react";
import logolospatojos from "../assets/images/logolospatojos.png";
import Tarjeta1 from "../components/tarjeta1";
import Tarjeta2 from "../components/Tarjeta2";
import Tarjeta3 from "../components/Tarjeta3";

function Home2() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            El Patojismo
          </a>
          <img src={logolospatojos} alt="Bootstrap" width="30" height="24" />

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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
              <li className="nav-item"></li>
              <li className="nav-item dropdown">
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item"></li>
            </ul>
            <form className="d-flex" role="search">
              <span className="navbar-text">creado por</span>
            </form>
          </div>
        </div>
      </nav>
      <div className="">

        <div className="row">
          <div className="col d-flex justify-content-center">
        <Tarjeta1></Tarjeta1>
          </div>
        </div>

        <div className="row">
          <div className="col d-flex justify-content-center">
        <Tarjeta2></Tarjeta2>
          </div>
        </div>

        <div className="row">
          <div className="col d-flex justify-content-center">
        <Tarjeta3></Tarjeta3>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home2;
