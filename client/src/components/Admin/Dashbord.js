import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getallTrajet } from "../../JS/userSlice/TrajetSlice";
import { deleteUser, getAllUsers } from "../../JS/userSlice/UserSlice";
import "../Admin/Dashbord.css";
const Dashbord = () => {
  const [pingL, setPingL] = useState();
  // const user = useSelector((state) => state.user?.user);
  const users = useSelector((state) => state.user?.users);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    {
      dispatch(getAllUsers());
      
    }
  }, [pingL]);
  return (
    <div className="dashbord">
      <h1>ttt</h1>
      <button
        onClick={() => {
          dispatch(getAllUsers());
          setPingL(!pingL);
        }}
        className="btn btn-info"
      >
        {" "}
        All user
      </button>
      <button
        onClick={() => {
          dispatch(getallTrajet());
          setPingL(!pingL);
        }}
        className="btn btn-info"
      >
        {" "}
        All Trajet
      </button>
     
      <div className="usersss-list">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {users?.map((aa, i) => (
              <tr key={i}>
                <td>{aa?._id}</td>
                <td>{aa?.name}</td>
                <td>{aa?.lastName}</td>
                <td>{aa?.email}</td>
                <td>{aa?.Role}</td>
                <td>
                  <a href="" className="btn btn-info">
                    Edit
                  </a>
                  <button className="btn btn-danger"
                  onClick={() => {
                    dispatch(deleteUser(aa?._id));
                    // setPingL(!pingL);
                  }}
                  
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            
          </tbody> 
        </table>
      </div>
    </div>
  );
};

export default Dashbord;
