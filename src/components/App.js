useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const location = {
          userId: Math.random().toString(36).substring(2, 15), // Temporary unique ID
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          timestamp: new Date(),
        };
        dispatch(saveLocationSuccess(location));

        try {
          await addDoc(collection(db, "locations"), location);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      },
      (error) => {
        setError(error.message);
        dispatch(saveLocationFailure(error.message));
      }
    );
  } else {
    const errorMessage = "Geolocation is not supported by this browser.";
    setError(errorMessage);
    dispatch(saveLocationFailure(errorMessage));
  }
}, [dispatch]);
