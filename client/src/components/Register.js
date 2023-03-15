import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../JS/userSlice/UserSlice";
import "../components/Register.css";
const Register = () => {
  const CurrentYear = new Date().getFullYear();


  const [register, setregister] = useState({
    name: "",
    lastName: "",
    anneenaissance:0,
    genre:"",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const  navigate=useNavigate();

  return (
    <div>
      <div className="wrapper">
        <form onSubmit={(e) => e.preventDefault()} className="form-signin">
          <h2 className="form-signin-heading">Please register</h2>
          
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="name"
            required=""
            autofocus=""
            onChange={(e) => setregister({ ...register, name: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="lastName"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, lastName: e.target.value })
            }
          />
          <select
            onChange={(e) =>
              setregister({ ...register, anneenaissance:(CurrentYear - parseInt( e.target.value)) })
            }
            class="form-control"
            required="required"
          >
            <option value="">Votre année de naissance</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
            <option value="1994">1994</option>
            <option value="1993">1993</option>
            <option value="1992">1992</option>
            <option value="1991">1991</option>
            <option value="1990">1990</option>
            <option value="1989">1989</option>
            <option value="1988">1988</option>
            <option value="1987">1987</option>
            <option value="1986">1986</option>
            <option value="1985">1985</option>
            <option value="1984">1984</option>
            <option value="1983">1983</option>
            <option value="1982">1982</option>
            <option value="1981">1981</option>
            <option value="1980">1980</option>
            <option value="1979">1979</option>
            <option value="1978">1978</option>
            <option value="1977">1977</option>
            <option value="1976">1976</option>

            <option value="1975">1975</option>
            <option value="1974">1974</option>

            <option value="1973">1973</option>
            <option value="1972">1972</option>
            <option value="1971">1971</option>
            <option value="1970">1970</option>
            <option value="1969">1969</option>
            <option value="1968">1968</option>
            <option value="1967">1967</option>
            <option value="1966">1966</option>
            <option value="1965">1965</option>
            <option value="1964">1964</option>
            <option value="1963">1963</option>
            <option value="1962">1962</option>
            <option value="1961">1961</option>
            <option value="1960">1960</option>
            <option value="1959">1959</option>
            <option value="1958">1958</option>
            <option value="1957">1957</option>
            <option value="1956">1956</option>
            <option value="1955">1955</option>
            <option value="1954">1954</option>
            <option value="1953">1953</option>
            <option value="1952">1952</option>
            <option value="1951">1951</option>
            <option value="1950">1950</option>
            <option value="1949">1949</option>

            <option value="1948">1948</option>
            <option value="1947">1947</option>
            <option value="1946">1946</option>
            <option value="1945">1945</option>
            <option value="1944">1944</option>
            <option value="1943">1943</option>
          </select>
          <select
            onChange={(e) =>
              setregister({ ...register, genre: e.target.value })
            }
            class="form-control"
            required="required"
          >
            <option value="">-- Genre --</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
          </select>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, email: e.target.value })
            }
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required=""
            onChange={(e) =>
              setregister({ ...register, password: e.target.value })
            }
          />
          <label className="checkbox">
            <input
              type="checkbox"
              value="remember-me"
              id="rememberMe"
              name="rememberMe"
            />{" "}
            Remember me
          </label>
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={() => {
              dispatch(userRegister(register));
              setTimeout(() => {
                navigate("/login");
                },1000);
                // setTimeout(() => {
                //    window.location.reload();
                   
                //     },1000);
            }}
          >
            register
          </button>
          u already have an account? <Link to="/Login">Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;










