const { actions } = require("../cake/cakeSlice");

const sliceCreator = require("@reduxjs/toolkit").createSlice;

const initialIceCream = {
  numOfIceCreams: 20,
};

const iceCreamSlice = sliceCreator({
  name: "iceCream",
  initialState: initialIceCream,
  reducers: {
    iceCreamOrdered: (state) => {
      state.numOfIceCreams--;
    },
    iceCreamRestocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actions.orderCake, (state) => {
      state.numOfIceCreams--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.actions = iceCreamSlice.actions;
