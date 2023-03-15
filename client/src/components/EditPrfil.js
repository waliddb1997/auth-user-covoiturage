import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { edituser, userCurrent } from "../JS/userSlice/UserSlice";
import "../components/EditProfil.css";
const EditPrfil = ({ping,setping}) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const [update, setupdate] = useState({
    name: user.name,
    lastName: user.lastName,
    anneenaissance: user.anneenaissance,
    genre: "",
    email: user.email,
    Profession: user.Profession,
    marqueVoiture: user.marqueVoiture,
    colorVoiture: user.colorVoiture,
    Climatiseur: user.Climatiseur,
    tabac: user.tabac,
  });

  const navigate = useNavigate();
  return (
    <section className="edit-prof">
      <div className="edit">
        <div className="iput-left">
          {/* <form onSubmit={(e) => e.preventDefault()} className="form-signin"> */}
          <h3> Info Personel </h3>

          <input
            // type="text"
            // className="form-control"
            // name="username"
            defaultValue={user.name}
            // required=""
            // autofocus=""
            onChange={(e) => setupdate({ ...update, name: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            name="username"
            defaultValue={user.lastName}
            required=""
            autofocus=""
            onChange={(e) => setupdate({ ...update, lastName: e.target.value })}
          />
          <input
            value={user?.anneenaissance}
            // type="text"
            // className="form-control"
            // name="username"
            // placeholder={user?.anneenaissance}
            // required=""
            // autofocus=""
            // onChange={(e) =>
            //   setupdate({ ...update, anneenaissance: e.target.value })
            // }
          />

          <input
            // type="text"
            // className="form-control"
            // name="username"
            // placeholder=""
            // required=""
            // autofocus=""
            value={user?.genre}
            // onChange={(e) => setupdate({ ...update, genre: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            // placeholder={user?.email}
            defaultValue={user?.email}
            onChange={(e) => setupdate({ ...update, email: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Votre Profession"
            required=""
            autofocus=""
            onChange={(e) =>
              setupdate({ ...update, Profession: e.target.value })
            }
          />

          {/* </form> */}
        </div>
        {user && user.Role == "user" ? (
          <div className="iput-raght">
            <h3> Info Voiture </h3>

            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Votre marque de voiture"
              required=""
              autofocus=""
              onChange={(e) =>
                setupdate({ ...update, marqueVoiture: e.target.value })
              }
            />
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Color de voiture"
              required=""
              autofocus=""
              onChange={(e) =>
                setupdate({ ...update, colorVoiture: e.target.value })
              }
            />

            <select
              onChange={(e) =>
                setupdate({ ...update, Climatiseur: e.target.value })
              }
              class="form-control"
              required="required"
            >
              <option value="">-- Climatiseur --</option>
              <option value="Voiture Climatisé">Voiture Climatisé</option>
              <option value="Voiture Non Climatisé">
                Voiture Non Climatisé
              </option>
            </select>
            <select
              onChange={(e) => setupdate({ ...update, tabac: e.target.value })}
              class="form-control"
              required="required"
            >
              <option value="">-- Choix du Tabac --</option>
              <option value="Autoriser le TABAC">Autoriser le TABAC</option>
              <option value="Refuser le TABAC">Refuser le TABAC</option>
            </select>
          </div>
        ) : null}
      </div>
      <button
        onClick={() => {
          dispatch(edituser({ id: user._id, user: update }));
          setping(!ping);
          setTimeout(() => {
            navigate("/profil");
          }, 2000);
        }}
      >
        Edit
      </button>
    </section>
  );
};

export default EditPrfil;
