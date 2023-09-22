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
  numOfCakes: 20,
};

const reducer = (state = initialState, action) => {
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
