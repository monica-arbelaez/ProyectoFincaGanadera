import React from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../infrastucture/firebase/auth";
import { auth } from "../../infrastucture/firebase/firebase";
import CreateAnimal from "./createAnimalModal";

const Header = () => {
  const googleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
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
                  <CreateAnimal />
                  <Link className="nav-item nav-link mr-3"
                    to="/pasture">newPasture </Link>
                  <Link className="nav-item nav-link mr-3"
                    to="/list-pasture">List-Pasture </Link>
                  <Link className="nav-item nav-link mr-3"
                    to="/order-by-density">order-by-density </Link>
                  <Link className="nav-item nav-link mr-3"
                    to="/order-by-length">order-by-length </Link>
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
            className=" loginBootton" 
            aria-hidden="true" 
            type="button"
              onClick={() => googleSignIn()}
            ><i className="fa fa-user fa-lg fa-sm-5"  aria-hidden="true"></i>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
