const initState = {
  starships: [],
  loading: true,
};

const starshipsLoaded = (state, action) => {
  return {
    ...state,
    starships: action.payload,
    loading: false
  };
};

const starshipsRequested = (state, action) => {
  return {
    ...state,
    starships: action.payload,
    loading: true
  };
};

const starshipsReducer = (state = initState, action) => {
  switch (action.type) {
    case "STARSHIPS_REQUESTED":
      return starshipsRequested(state, action);
    case "STARSHIPS_LOADED":
      return starshipsLoaded(state, action);

    default:
      return state;
  }
};

export default starshipsReducer;
