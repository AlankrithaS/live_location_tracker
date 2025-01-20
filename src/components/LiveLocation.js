import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateLocation } from "../redux/actions/locationActions";

const LiveLocation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(updateLocation({ latitude, longitude, timestamp: new Date() }));
        },
        (error) => console.error("Error fetching location:", error),
        { enableHighAccuracy: true }
      );
    }, 10000); // Update every 10 seconds

    // Stop tracking after 5 minutes
    setTimeout(() => {
      clearInterval(intervalId);
      console.log("Stopped tracking.");
    }, 300000); // 5 minutes

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [dispatch]);

  return <div>Tracking live location...</div>;
};

export default LiveLocation;
