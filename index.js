const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").actions;
const iceCreamActions = require("./features/icecream/icecreamSlice").actions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

// console.log("store = ", store);
// console.log("initial state : ", store.getState());
// console.log("cakeActions = ", cakeActions);
// console.log("iceCreamActions = ", iceCreamActions);

const unsubscribe = store.subscribe(() => {
  console.log("updated state : ", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.orderCake());
// store.dispatch(cakeActions.orderCake());
// store.dispatch(cakeActions.orderCake());
// store.dispatch(cakeActions.restockCake(5));
// store.dispatch(iceCreamActions.iceCreamOrdered());
// store.dispatch(iceCreamActions.iceCreamOrdered());
// store.dispatch(iceCreamActions.iceCreamRestocked(5));
// unsubscribe();
