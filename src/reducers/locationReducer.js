const initialState = {
  location: { latitude: null, longitude: null },
  error: null,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_LOCATION_SUCCESS":
      return { ...state, location: action.payload, error: null };
    case "SAVE_LOCATION_FAILURE":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default locationReducer;