import React from "react";
import { Link } from "react-router-dom";

export default function Header({handlebtn, setHandlebtn, uname, setUname} ) {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
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
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-start">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
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
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  {uname ? uname[0].toUpperCase() + uname.slice(1) : ""}
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              { handlebtn === true ? <><Link
                className="btn btn-outline-success "
                type="submit"
                to="/login"
              >
                log in
              </Link>
              <Link
                className="btn btn-outline-success ms-2"
                type="submit"
                to="/signup"
              >
                signup
              </Link></> : <div
                className="btn btn-outline-success ms-2"
                onClick={()=>{ setHandlebtn(true); setUname("") }}
                
              >
                Log out
              </div>}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
