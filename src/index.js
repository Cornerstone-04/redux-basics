const redux = require("redux");
const createStore = redux.createStore;
// combine multiple reducers
const combineReducers = redux.combineReducers;

//redux action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//action creator
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
};
const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
    info: "second redux action",
  };
};

// reducer
// (previousState, action) => newState

/* const initialState = {
  numOfCakes: 20,
  numOfIceCreams: 20,
};*/

// split state into two
const initialCakeState = {
  numOfCakes: 20,
};
const initialIceCreamState = {
  numOfIceCreams: 20,
};

/*
 
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, //make a copy of the object
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state, //make a copy of the object
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};
*/

// split reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, //make a copy of the object
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state, //make a copy of the object
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

// combine reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log("Initial State", store.getState());

//subscribe
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

//dispatch
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

//unsubscribe
unsubscribe();
