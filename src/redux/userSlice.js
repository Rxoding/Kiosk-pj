import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: "",
  subs: "",
  age: "",
  name: "",
  nickname: "",
  sex: "",
  weight: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.ids = action.payload.ids;
      state.subs = action.payload.subs;
      state.age = action.payload.age;
      state.name = action.payload.name;
      state.nickname = action.payload.nickname;
      state.sex = action.payload.sex;
      state.weight = action.payload.weight;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
