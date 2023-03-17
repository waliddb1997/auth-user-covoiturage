import React, { useState, useRef } from "react";
import "../components/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getallTrajet } from "../JS/userSlice/TrajetSlice";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Recherche from "./Recherche";

const Home = () => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const [filterObject, setfilterObject] = useState({});
  const dateInputRef = useRef(null);

  const handleChangeFilter = (e) => {
    setfilterObject({ ...filterObject, [e.target.name]: e.target.value });
  };


  // const [value, onChange] = useState(new Date());
  return (
    <>
      {/* <Navbar/> */}
      <div className="home">
        <img src="home page.png" alt="imggggg" />
        <div>
          <h1 className="home-phrase">
            Un vaste choix de trajets à petits prix
          </h1>
        </div>
        <div action="" id="myform">
          <div action="">
            
     
            <select name="lieuDepart" onChange={handleChangeFilter}>
              <option value="">Lieu Depart-- </option>
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
          </div>

          <div action="">
            <select name="lieuArrive" onChange={handleChangeFilter}>
              <option value="">Lieu Arrive-- </option>
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
          </div>

          <input
            name="date"
            type="date"
            onChange={handleChangeFilter}
            ref={dateInputRef}
          />

         <Link to="/recherche"><button onClick={() => {dispatch(getallTrajet(filterObject))
           
          }}>GO</button></Link> 


        </div>
        {/* <section className="section-houme ">
          <Outlet filterObject={filterObject} setfilterObject={setfilterObject}/>
          <Recherche filterObject={filterObject} setfilterObject={setfilterObject}/>
        </section> */}
      </div>
    
    </>
  );
};

export default Home;
