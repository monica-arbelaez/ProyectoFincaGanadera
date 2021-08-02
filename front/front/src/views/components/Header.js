import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../infrastucture/firebase/auth";
import { auth } from "../../infrastucture/firebase/firebase";
import Swal from "sweetalert2";
import "../css/style.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOpen = () => {
    setOpenMenu(!openMenu);
  };
  const googleSignIn = async (event) => {
    event.preventDefault();
    signInWithGoogle()
      .then((response) => {
        Swal.fire("Correcto", response.user.displayName, "success");
      })
      .catch((error) => {
        Swal.fire(error.message);
      });
  };

  return (
    <div className="headline">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Finca Ganadera
          </Link>
          {auth().currentUser ? (
            <>
              <div
                className="collapse navbar-collapse justify-content-start"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  <Link className="nav-item nav-link mr-3 " to="/list-pasture">
                    POTREROS{" "}
                  </Link>
                  <Link className="nav-item nav-link mr-3 " to="/list-animals">
                    ANIMALES{" "}
                  </Link>
                </div>
              </div>
              <button
                className="btn btn-primary mr-3"
                type="button"
                onClick={() => auth().signOut()}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="btn btn-danger mr-3"
              type="button"
              onClick={googleSignIn}
            >
              Login Google
            </button>
          )}
        </div>
        <span className="icon-bar" id="menu-icon" onClick={menuOpen}>
          <i className="fas fa-bars"></i>
        </span>
      </nav>
      {openMenu && (
        <div>
          <div className="navbar-nav">
            <Link
              className="styleNav nav-item nav-link mr-3"
              to="/list-pasture"
            >
              POTREROS{" "}
            </Link>
            <Link
              className="styleNav nav-item nav-link mr-3"
              to="/list-animals"
            >
              ANIMALES{" "}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
