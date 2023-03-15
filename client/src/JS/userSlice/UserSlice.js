import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//
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

export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let response = await axios.post("http://localhost:5000/user/login", user);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
});

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

//up Date User
export const edituser = createAsyncThunk("user/edit", async ({ id, user }) => {
  try {
    let result = await axios.put(`http://localhost:5000/user/${id}`, user);
    return await result.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  user: null,
  status: null,
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

    [edituser.pending]: (state) => {
      state.status = "pending";
    },
    [edituser.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [edituser.rejected]: (state) => {
      state.status = "fail";
    },

    //     increment: (state) => {
    //       // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //       // doesn't actually mutate the state because it uses the Immer library,
    //       // which detects changes to a "draft state" and produces a brand new
    //       // immutable state based off those changes
    //       state.value += 1
    //     },
    //     decrement: (state) => {
    //       state.value -= 1
    //     },
    //     incrementByAmount: (state, action) => {
    //       state.value += action.payload
    //     },
    //   },
  },
});

// Action creators are generated for each case reducer function
export const { logout } = UserSlice.actions;

export default UserSlice.reducer;
