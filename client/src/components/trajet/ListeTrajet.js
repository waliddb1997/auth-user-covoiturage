import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTrajetUser } from "../../JS/userSlice/TrajetSlice";
import "../trajet/ListeTrajet.css";
const ListeTrajet = () => {
  
  const [pingList, setPingList] = useState();
  const user = useSelector((state) => state.user?.user);
  const trajets = useSelector((state) => state.trajet?.trajet);
  const dispatch = useDispatch();
  useEffect(() => {

        dispatch(deleteTrajetUser());

    }, [pingList]);
  return (
    <div className="trajet-list">
      {trajets?.map((trajet, i) => (
        <div className="containerr" key={i}>
          <div className="card">
            <div className="card-head">
              <h2>
                <img src="roaad.png" alt="road" />
                <span>De </span>
                {trajet?.lieuDepart}
              </h2>
              <h3>
                <span>A </span> {trajet?.lieuArrive}
              </h3>
              <h3>
                <img src="annceurr.png" alt="bbbb" />
                <span>Annanceur :</span>
              </h3>
              <h3>{user?.name} </h3>
            </div>
            <p>
                <img src="car.png" />
                {trajet?.voiture}
              </p>
            <div className="card-body">
              <p>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXpJREFUSEu9lYExBEEURN9lQASIABEgAyIgA0SCCBABMiCCIwMykAH1quZfzcztzO5dOVO1dbW3s939e/7vnbHhNdswPlMILoAj4CBdanpP1zPw0hPZIzgFboDdkSo/gWtAsqXVIrgFLtPuL8D716Tav63mGLgCdtI+90hUrCGCHNwXvO8tSazUdZdIF/trAm15Sk8PM8VjvWBF87TpLLerJtBPS24p/0kgQ5VHJWLshaJ8o91yD+h562B7BGKGwEUVOcEDcN5RL8AYQVTxCCi4mAN7ex/oeT9GEGchljgFwdjLeQXbwHfj5Auc3KIpBFGlvycNkibBFIu20sBp5RBJWPQRsbLqIetKTlL0fBoyh27wkGPIij5u+CyJUVHnT7dN8z6eEhE1d7RoMUf/HhWqysNOVQbYn4VdAOUk+ur9WxXXfoQUELGylKT1oNUqPXSBI+9bVei5RCt9cHIwibzscfvfZZ87B4IOAg+l6Vjmr/V8ykd/LeB46RdQo10ZcejkJwAAAABJRU5ErkJggg==" />
                {trajet?.heure}
              </p>
              <p>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXpJREFUSEu9lYExBEEURN9lQASIABEgAyIgA0SCCBABMiCCIwMykAH1quZfzcztzO5dOVO1dbW3s939e/7vnbHhNdswPlMILoAj4CBdanpP1zPw0hPZIzgFboDdkSo/gWtAsqXVIrgFLtPuL8D716Tav63mGLgCdtI+90hUrCGCHNwXvO8tSazUdZdIF/trAm15Sk8PM8VjvWBF87TpLLerJtBPS24p/0kgQ5VHJWLshaJ8o91yD+h562B7BGKGwEUVOcEDcN5RL8AYQVTxCCi4mAN7ex/oeT9GEGchljgFwdjLeQXbwHfj5Auc3KIpBFGlvycNkibBFIu20sBp5RBJWPQRsbLqIetKTlL0fBoyh27wkGPIij5u+CyJUVHnT7dN8z6eEhE1d7RoMUf/HhWqysNOVQbYn4VdAOUk+ur9WxXXfoQUELGylKT1oNUqPXSBI+9bVei5RCt9cHIwibzscfvfZZ87B4IOAg+l6Vjmr/V8ykd/LeB46RdQo10ZcejkJwAAAABJRU5ErkJggg==" />
                {trajet?.date}
              </p>
              <p>
                <img src="money.png" alt="" />
                {trajet?.prix}
                <span>DT par place</span>
              </p>
              <p>
                <img src="phone.png" alt="" />
                
                <span>{trajet?.phone}</span>
              </p>
            </div>

            <div className="card-footer">
              <ul className="social-links">
                <li>
                  <a>Edit</a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      dispatch(deleteTrajetUser(trajet?._id));
                      setPingList(!pingList);
                    }}
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListeTrajet;
