const sliceCreator = require("@reduxjs/toolkit").createSlice;
const asyncThunkCreator = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

const initialState = {
  isLoading: true,
  users: [],
  error: "",
};

//generated pending ,fullFilled and rejected action types
const fetchUsers = asyncThunkCreator("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user.email));
  // .get("https://jsonplaceholder.typicode.com/users")
  // .then((response) => response.data.map((user) => user.name));
});

const userSlice = sliceCreator({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
