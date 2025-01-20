export const saveLocationSuccess = (location) => ({
    type: "SAVE_LOCATION_SUCCESS",
    payload: location,
  });
  
  export const saveLocationFailure = (error) => ({
    type: "SAVE_LOCATION_FAILURE",
    payload: error,
  });