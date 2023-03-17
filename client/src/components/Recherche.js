import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallTrajet } from "../JS/userSlice/TrajetSlice";

const Recherche = ({ filterObject, setfilterObject }) => {
  //   const trajets = useSelector((state) => state.trajet?.trajet);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallTrajet(filterObject));
    console.log(filterObject);
  }, []);
  return (
    <div>


      <h1> {filterObject?.lieuDepart}</h1>
      <h1> {filterObject?.lieuArrive}</h1>
      <h1> {filterObject?.heure}</h1>
      <h1> {filterObject?.date}</h1>
      <h1> {filterObject?.phone}</h1>
    </div>
  );
};

export default Recherche;
