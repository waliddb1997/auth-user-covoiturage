import React, { useEffect, useState } from "react";
import "../components/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, userCurrent } from "../JS/userSlice/UserSlice";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
  }, []);
  // open and close login
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    // open user menu
  };
  return (
    <div className="navbar">
      <div className="bloc-nav">
        <img className="logo" src="image.png" alt="img" />

        <ul className="nav-right">
          <li>
            <Link to="/"> Carpooling</Link>
          </li>

          <div className="right">
          
            {
              user?.Role == "admin" ? (
                <>
                  <li>
                    <Link to="/profil"> Profil</Link>
                  </li>
                 
                  <li>
                    <Link to="/Dashbord"> Dashbord</Link>
                  </li>
                  <li>
                    <button
                      id="log"
                      className="link"
                      onClick={() => {
                        dispatch(logout());
                        navigate("/");
                      }}
                    >
                      Log out
                    </button>
                  </li>
                </>
              ) : null
             
            }
            {user?.Role == "user"? (
              <>
                <li>
                  <Link to="/profil"> Profil</Link>
                </li>
                <li>
                  <Link to="/addTrajet"> add trajet</Link>
                </li>

                <li>
                  <button
                    id="log"
                    className="link"
                    onClick={() => {
                      dispatch(logout());
                      navigate("/");
                    }}
                  >
                    Log out
                  </button>
                </li>
              </>
            ) :user?.Role == "admin" ? null : (
              <div className="header-user">
                <button
                  onClick={() => handleOpen()}
                  aria-label="Se connecter"
                  aria-controls="connect-menu"
                  aria-expanded="false"
                  type="button"
                >
                  <div className="user-boton">
                    <img className="user-boton" src="user.png" alt="immg" />
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="kirk-icon sc-ksBlkl gnWmNh"
                    width="30"
                    height="30"
                    aria-hidden="true"
                  >
                    <polyline
                      fill="none"
                      stroke="hsl(170,46%,51.4%)"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="50"
                      points="9 18 15 12 9 6"
                      transform="rotate(90 12 12)"
                    ></polyline>
                  </svg>
                  {open ? (
                    <div className="dropdown">
                      <Link to="/register" className="link">
                        sign Up{" "}
                      </Link>
                      <Link to="/login" className="link">
                        Login{" "}
                      </Link>
                    </div>
                  ) : null}
                </button>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
