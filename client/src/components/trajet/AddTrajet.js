import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userTrajet } from "../../JS/userSlice/TrajetSlice";
import "../trajet/AddTrajet.css";
import ListeTrajet from "./ListeTrajet";

const AddTrajet = () => {
    const isAuth = localStorage.getItem("token");
  const [dates, setDates] = useState("");
  const user = useSelector((state) => state.user?.user);
//   console.log(user?._id)
//   const trajets = useSelector((state) => state.trajet?.trajet);
//   console.log(trajets?._id)
//   const dateInputRef = useRef(null);

//   const handleChange = (e) => {
//     setDates(e.target.value);
//   };
  const [addtrajet, setAddtrajet] = useState({
    lieuDepart: "",
    lieuArrive: "",
    date:"",
    heure:"", 
    phone: "",
    voiture: "",
    nbPlace: "",
    prix: "",
    // clientId:""
    // clientId:user?._id 
  });

  const dispatch = useDispatch();
  const  navigate=useNavigate();
  return (
    <section className="Add-Trajet">
      <div className="Trajet">
        <h3>
          <img src="roaad.png" alt="road" /> Trajet:  
        </h3>

        <div className="input-trajet">
          <form onSubmit={(e) => e.preventDefault()}>
            <select  
            onChange={(e) => setAddtrajet({ ...addtrajet, lieuDepart: e.target.value })}>
            <option value="">-- lieuDepart --</option>
              <option value="Ariana">Ariana </option>
              <option value="Béja">Béja </option>
              <option value="Ben Arous">Ben Arous </option>
              <option value="Bizerte">Bizerte </option>
              <option value="Gabès">Gabès </option>
              <option value="Gafsa">Gafsa </option>
              <option value="Jendouba">Jendouba </option>
              <option value="Kairouan">Kairouan </option>
              <option value="Kasserine">Kasserine </option>
              <option value="Kébili">Kébili </option>
              <option value="Le Kef">Le Kef </option>
              <option value="Mahdia">Mahdia </option>
              <option value="La Manouba">La Manouba </option>
              <option value="Médenine">Médenine </option>
              <option value="Monastir">Monastir </option>
              <option value="Nabeul">Nabeul </option>
              <option value="Sfax">Sfax </option>
              <option value="Sidi Bouzid">Sidi Bouzid </option>
              <option value="Siliana">Siliana </option> 
              <option value="Sousse">Sousse </option>
              <option value="Tataouine">Tataouine </option>
              <option value="Tozeur">Tozeur </option>
              <option value="Tunis">Tunis </option>
              <option value="Zaghouan">Zaghouan </option>
            </select>
          </form>
          <form action="">
            <select
            onChange={(e) => setAddtrajet({ ...addtrajet, lieuArrive: e.target.value })}
            >
            <option value="">-- lieuArrive --</option>
              <option value="Ariana">Ariana </option>
              <option value="Béja">Béja </option>
              <option value="Ben Arous">Ben Arous </option>
              <option value="Bizerte">Bizerte </option>
              <option value="Gabès">Gabès </option>
              <option value="Gafsa">Gafsa </option>
              <option value="Jendouba">Jendouba </option>
              <option value="Kairouan">Kairouan </option>
              <option value="Kasserine">Kasserine </option>
              <option value="Kébili">Kébili </option>
              <option value="Le Kef">Le Kef </option>
              <option value="Mahdia">Mahdia </option>
              <option value="La Manouba">La Manouba </option>
              <option value="Médenine">Médenine </option>
              <option value="Monastir">Monastir </option>
              <option value="Nabeul">Nabeul </option>
              <option value="Sfax">Sfax </option>
              <option value="Sidi Bouzid">Sidi Bouzid </option>
              <option value="Siliana">Siliana </option>
              <option value="Sousse">Sousse </option>
              <option value="Tataouine">Tataouine </option>
              <option value="Tozeur">Tozeur </option>
              <option value="Tunis">Tunis </option>
              <option value="Zaghouan">Zaghouan </option>
            </select>
          </form>
        </div>
      </div>
      <div className="date">
        <h3>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXpJREFUSEu9lYExBEEURN9lQASIABEgAyIgA0SCCBABMiCCIwMykAH1quZfzcztzO5dOVO1dbW3s939e/7vnbHhNdswPlMILoAj4CBdanpP1zPw0hPZIzgFboDdkSo/gWtAsqXVIrgFLtPuL8D716Tav63mGLgCdtI+90hUrCGCHNwXvO8tSazUdZdIF/trAm15Sk8PM8VjvWBF87TpLLerJtBPS24p/0kgQ5VHJWLshaJ8o91yD+h562B7BGKGwEUVOcEDcN5RL8AYQVTxCCi4mAN7ex/oeT9GEGchljgFwdjLeQXbwHfj5Auc3KIpBFGlvycNkibBFIu20sBp5RBJWPQRsbLqIetKTlL0fBoyh27wkGPIij5u+CyJUVHnT7dN8z6eEhE1d7RoMUf/HhWqysNOVQbYn4VdAOUk+ur9WxXXfoQUELGylKT1oNUqPXSBI+9bVei5RCt9cHIwibzscfvfZZ87B4IOAg+l6Vjmr/V8ykd/LeB46RdQo10ZcejkJwAAAABJRU5ErkJggg==" />{" "}
          Date, Heure et Téléphone:
        </h3>
        {/* <input type="date" onChange={handleChange} ref={dateInputRef} 
        
        onChange={(e) => setTrajet({ ...trajet, date: e.target.value })}
        /> */}
         <input type="date" 
         onChange={(e) => setAddtrajet({ ...addtrajet, date: e.target.value })}
         />

        <input type="time" 
        onChange={(e) => setAddtrajet({ ...addtrajet, heure: e.target.value })}
        />
        <input
          type="number"
          //   className="form-control"
          //   name="username"
          placeholder="Votre num de téléphone"
          //   required=""
          //   autofocus=""
          onChange={(e) => setAddtrajet({ ...addtrajet, phone: e.target.value })}
        />
      </div>
      <div className="Condition">
        <h3>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQ5JREFUSEvd1dE1BUEMxvHf7UAH6IAK6IAWVIAKUAEq0AIdUAEdcDvQASeO2bN3d/ZsxrEe5CUPm+Q/+TLZWVnYVgvX938Bh7hA+Iw94grhN6wm0RZeEb7F3rGL8J3VADc4xQOOk4R7HOEWZ3OAN2xjHy9JwB6eEbnRxWQHJXCNnWTxElY92FCiIs+o1QSsmtsHhN53PxjukB1DPkHMZWPRSouJw86GdLPod/Axm9YW8FW7BjhH6BnX7TpZs5YzCSjQuEWxcBmr5UwCLr/XPnz8LjJWy5kEZApmYkaA37xF3aL2h1y2OHO6uZjuNzPc5P5VbX2Mqrl/DogH4wBPDY9Nkaua2yrDnPaj74sDPgFF/jYZbFXncgAAAABJRU5ErkJggg==" />
          Voiture & Conditions:
        </h3>
        <input
          type="text"
          //   className="form-control"
          //   name="username"
          placeholder="Voiture"
          //   required=""
          //   autofocus=""
          onChange={(e) => setAddtrajet({ ...addtrajet, voiture: e.target.value })}
        />
        <input
          type="number"
          //   className="form-control"
          //   name="username"
          placeholder="Nombre de places "
          //   required=""
          //   autofocus=""
          onChange={(e) => setAddtrajet({ ...addtrajet, nbPlace: e.target.value })}
        />
        <input
          type="number"
          //   className="form-control"
          //   name="username"
          placeholder="Prix en Dt (Par place) "
          //   required=""
          //   autofocus=""
          onChange={(e) => setAddtrajet({ ...addtrajet, prix: e.target.value })}
        />
      </div>
      <button
        onClick={() => { 
           
           dispatch(userTrajet(addtrajet));
          // setping(!ping);
        //   setTimeout(() => {
        //     navigate("/profil");
        //   }, 2000);
        }}
      >
        adddddd 
      </button>
     
    </section>
  );
};

export default AddTrajet;
