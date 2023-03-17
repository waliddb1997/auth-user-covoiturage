import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../components/Profil.css";
import { getTrajet } from "../JS/userSlice/TrajetSlice";

const Profil = ({ping,setping}) => {

  const [pingList, setPingList] = useState()
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
              Couleur: <span>{user?.colorVoiture} </span>
                
              </li>
              <li>
              Climatiseur: <span>{user?.Climatiseur} </span>
                
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
                Mes préférences : <span>{user?.tabac} </span>
                  
                </li>
              </ul>
            </div>

            <div className="modif-prof">
              <button
                
                  
                  onClick={() => {
                    navigate("/EditPrfil");
                  }}
                  to="/EditPrfil"
                >
                  complete my profile
                
              </button>

              {user && user?.Role == "user" ? (
              <button
                
                  
                  onClick={() => {
                    dispatch(getTrajet())
                    setPingList(!pingList)

                    navigate("/ListeTrajet");
                  }}
                  to="/ListeTrajet"
                >
                  All votre Trajet
                
              </button>
               ) : null}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Profil;
