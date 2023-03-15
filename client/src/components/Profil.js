import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, userCurrent } from "../JS/userSlice/UserSlice";
import "../components/Profil.css";
import ListeTrajet from "./trajet/ListeTrajet";
import { getTrajet } from "../JS/userSlice/TrajetSlice";

const Profil = ({ping,setping}) => {
  const user = useSelector((state) => state.user?.user);
  const trajets = useSelector((state) => state.trajet?.trajet);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <section className="section-prfile">
      <div className="container-profil">
        {user && user.Role == "user" ? (
          <div className="profil-voiture">
            <div className="card-voiture">
              <h3 className="main-column-title">Voiture</h3>

              <h4>
                <span>{user?.marqueVoiture}</span>
              </h4>

              <li>
                <span>Couleur:</span> {user?.colorVoiture}
              </li>
              <li>
                <span>Climatiseur:</span> {user?.Climatiseur}
              </li>
            </div>
          </div>
        ) : null}
        <div className="profil-user">
          <div className="card-user">
            <img src="personne.png" alt="personn" />
            <div className="name-user">
              <ul>
                <li>
                  <h1> {user?.name}</h1>
                  <h3>({user?.anneenaissance} ans)</h3>
                </li>
                <li>{user?.genre}</li>
                <li>
                  Profession : <span>{user?.Profession} </span>
                </li>
                <li>
                  <span>Mes préférences :</span>
                  {user?.tabac}
                </li>
              </ul>
            </div>

            <div className="modif-prof">
              <button>
                <Link
                  id="modif"
                  onClick={() => {
                    navigate("/EditPrfil");
                  }}
                  to="/EditPrfil"
                >
                  complete my profile
                </Link>
              </button>
              <button>
                <Link
                  id="modif"
                  onClick={() => {
                    dispatch(getTrajet());
                    navigate("/ListeTrajet");
                  }}
                  to="/ListeTrajet"
                >
                  All votre Trajet
                </Link>
              </button>
            </div>
          </div>
          {/* <div className="maplist">
            {trajets?.map((trajet) => (
              <ListeTrajet D={trajet} />
            ))}
            <Outlet />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Profil;
