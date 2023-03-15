import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../trajet/ListeTrajet.css";
const ListeTrajet = () => {
  const trajets = useSelector((state) => state.trajet?.trajet);

  return (
    <div className="trajet-list">
      {trajets?.map((trajet) => (
        <h1>{trajet?.lieuDepart}</h1>
      ))}
    </div>
  );
};

export default ListeTrajet;
