import React from "react";
import { useDispatch } from "react-redux";
import { saveLocation } from "../redux/actions/locationActions";

const WhatsAppInterface = () => {
  const dispatch = useDispatch();

  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(saveLocation(latitude, longitude));
        },
        (error) => alert("Failed to get location: " + error.message)
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="whatsapp-interface">
      <h2>Join the School WhatsApp Group</h2>
      <button onClick={requestLocation}>Join Group</button>
    </div>
  );
};

export default WhatsAppInterface;
