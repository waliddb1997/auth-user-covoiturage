
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  userCurrent } from "./JS/userSlice/UserSlice";
import Profil from "./components/Profil";
import PrivateRoute from "./Routes/PrivateRoute";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Dashbord from "./components/Admin/Dashbord";
import Erreur from "./components/Erreur";
import EditPrfil from "./components/EditPrfil";
import AddTrajet from "./components/trajet/AddTrajet";
import ListeTrajet from "./components/trajet/ListeTrajet";
import Recherche from "./components/Recherche";



function App() {
  const [ping, setping] = useState(false); 
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      dispatch(userCurrent());
    }
  }, [ping]);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="*" element={<Erreur />} />
        <Route path="/" element={<Home />} >  
        <Route path="/recherche" element={<Recherche />} />
       </Route>
        <Route path="/register" element={<Register />} />
        
        
        <Route
          path="/Login"
          element={<Login ping={ping} setping={setping} />}
        />
        <Route element={<PrivateRoute />}>
          <Route path="/Profil" element={<Profil />} />

          {/* <Route element={<PrivateRouteA />}> */}
          <Route path="/Dashbord" element={<Dashbord />} />
          <Route
            path="/EditPrfil"
            element={<EditPrfil ping={ping} setping={setping} />}
          />
          <Route path="/AddTrajet" element={<AddTrajet />} />
          <Route path="/ListeTrajet" element={<ListeTrajet />} />
          {/* </Route> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
