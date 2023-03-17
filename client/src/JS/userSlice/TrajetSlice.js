import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//**********user add trajet ***********************

export const userTrajet = createAsyncThunk(
  "trajet/addTrajet",
  async (trajet) => {
    try {
      let response = await axios.post(
        "http://localhost:5000/trajet/addTrajet",
        trajet,
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//**********user get trajet ***********************
export const getTrajet = createAsyncThunk("trajet/getTrajet", async () => {
  try {
    let result = await axios.get("http://localhost:5000/trajet/getTrajet", {
      headers: { Authorization: localStorage.getItem("token") },
    });
    return await result.data;
  } catch (error) {
    console.log(error);
  }
});

//********** get all trajet ***********************
export const getallTrajet = createAsyncThunk(
  "trajet/getallTrajet",
  async (filterObject) => {
    console.log(filterObject);
    try {
      let result = await axios.post(
        "http://localhost:5000/trajet/getAllTrajet",
        filterObject
      );
      return await result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//********** deletttte  trajet ***********************
export const deleteTrajetUser = createAsyncThunk("trajet/deleteTrajet", async (id) => {
  try {
    let result =  await axios.delete(`http://localhost:5000/trajet/deleteTrajet/${id}`);
    return await result.data;
  } catch (error) {
    console.log(error);
  }
});
const initialState = {
  allTrajet: [],
  trajet: null,
  status: null,  
};


export const TrajetSlice = createSlice({
  name: "trajet",
  initialState,
  reducers: {},
  extraReducers: {

    //**********user add trajet ***********************
    [userTrajet.pending]: (state) => {
      state.status = "pending";
    },
    [userTrajet.fulfilled]: (state, action) => {
      state.status = "success";

      state.trajet = action.payload?.trajet;
      //   localStorage.setItem('token', action.payload?.data?.token) ;
    },
    [userTrajet.rejected]: (state) => {
      state.status = "fail";
    },


    //**********user get trajet ***********************
    [getTrajet.pending]: (state) => {
      state.status = "pending";
    },
    [getTrajet.fulfilled]: (state, action) => {
      state.status = "success";
      state.trajet = action.payload?.trajet;
    },
    [getTrajet.rejected]: (state) => {
      state.status = "fail";
    },


    //********** get all trajet ***********************
    [getallTrajet.pending]: (state) => {
      state.status = "pending";
    },
    [getallTrajet.fulfilled]: (state, action) => {
      state.status = "success";
      state.allTrajet = action.payload?.trajet;
    },
    [getallTrajet.rejected]: (state) => {
      state.status = "fail";
    },

     //**********  delete trajet ***********************
     [deleteTrajetUser.pending]: (state) => {
      state.status = "pending";
    },
    [deleteTrajetUser.fulfilled]: (state, action) => {
      state.status = "success";
      // state.trajet = action.payload?.trajet;
    },
    [deleteTrajetUser.rejected]: (state) => {
      state.status = "fail";
    },


  },
});

export default TrajetSlice.reducer;
