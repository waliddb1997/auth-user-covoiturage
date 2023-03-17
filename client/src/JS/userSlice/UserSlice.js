import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//**********register user***********************
export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/user/register",
      user
    );
    return await response.data;
  } catch (error) {
    console.log(error);
  }
});


//**********login user***********************
export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let response = await axios.post("http://localhost:5000/user/login", user);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
});

//**********user current ***********************
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let response = await axios.get("http://localhost:5000/user/current", {
      headers: { Authorization: localStorage.getItem("token") },
    });

    return await response.data;
  } catch (error) {
    console.log(error);
  }
});

//**********UPdate user***********************
export const edituser = createAsyncThunk("user/edit", async ({ id, user }) => {
  try {
    let result = await axios.put(`http://localhost:5000/user/${id}`, user);
    return await result.data;
  } catch (error) {
    console.log(error);
  }
});


//**********get all user***********************

export const getAllUsers = createAsyncThunk("user/alluser", async () => {
  try {
    let result = await axios.get("http://localhost:5000/user/alluser");
    return await result.data;
  } catch (error) {
    console.log(error);
  }
});

//********** deletttte  userr ***********************
export const deleteUser = createAsyncThunk("user/deleteuser", async (id) => {
  try {
    let result = await axios.delete(`http://localhost:5000/user/deleteuser/${id}`);
    return await result.data; 
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  user: null,
  status: null,
  users: [],
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {

    //**********register user***********************
    [userRegister.pending]: (state) => {
      state.status = "pending";
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload?.newUserToken;
      localStorage.setItem("token", action.payload?.data?.token);
    },
    [userRegister.rejected]: (state) => {
      state.status = "fail";
    },


    //**********login user***********************
    [userLogin.pending]: (state) => {
      state.status = "pending";
    },
    [userLogin.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload?.user;
      localStorage.setItem("token", action.payload.token);
    },
    [userLogin.rejected]: (state) => {
      state.status = "fail";
    },


    //**********usercurrent ***********************
    [userCurrent.pending]: (state) => {
      state.status = "pending";
    },
    [userCurrent.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload?.user;
    },
    [userCurrent.rejected]: (state) => {
      state.status = "fail";
    },

    //**********update user***********************
    [edituser.pending]: (state) => {
      state.status = "pending";
    },
    [edituser.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [edituser.rejected]: (state) => {
      state.status = "fail";
    },


    //********** get All users ***********************
    [getAllUsers.pending]: (state) => {
      state.status = "pending";
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload?.user;
    },
    [getAllUsers.rejected]: (state) => {
      state.status = "fail";
    },

    
     //**********  delete user ***********************
     [deleteUser.pending]: (state) => {
      state.status = "pending";
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.status = "success";
      // state.trajet = action.payload?.trajet;
    },
    [deleteUser.rejected]: (state) => {
      state.status = "fail";
    },

  },
});

// Action creators are generated for each case reducer function
export const { logout } = UserSlice.actions;

export default UserSlice.reducer;
