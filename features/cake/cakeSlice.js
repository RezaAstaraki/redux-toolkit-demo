const sliceCreator = require("@reduxjs/toolkit").createSlice;

const initialCake = {
  numOfCake: 10,
};
const cakeSlice = sliceCreator({
  name: "cake",
  initialState: initialCake,
  reducers: {
    orderCake: (state) => {
      state.numOfCake--;
    },
    restockCake: (state, action) => {
      state.numOfCake += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.actions = cakeSlice.actions;
