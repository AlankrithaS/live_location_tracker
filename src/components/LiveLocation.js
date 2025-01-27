useEffect(() => {
  const intervalId = setInterval(async () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const locationUpdate = { latitude, longitude, timestamp: new Date() };
        dispatch(updateLocation(locationUpdate));

        // Update Firestore
        try {
          await addDoc(collection(db, "locations"), locationUpdate);
        } catch (error) {
          console.error("Error updating location: ", error);
        }
      },
      (error) => console.error("Error fetching location:", error),
      { enableHighAccuracy: true }
    );
  }, 10000); // Update every 10 seconds

  return () => clearInterval(intervalId); // Cleanup interval on unmount
}, [dispatch]);
