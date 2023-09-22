const redux = require("redux");
const createStore = redux.createStore;

//redux action
const BUY_CAKE = "Buy Cake";

//action creator
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
};

// reducer
// (previousState, action) => newState

const initialState = {
  cakeID: 1,
  numOfCakes: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, //make a copy of the object
        cakeID: state.cakeID + 1, //increment by one
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State", store.getState());

//subscribe
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

//dispatch
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

//unsubscribe
unsubscribe();
