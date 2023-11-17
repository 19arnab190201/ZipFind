// App.js
import React, { useState } from "react";
import axios from "axios";
import PostalCodeInput from "./components/PostalCodeInput";
import LocationInfo from "./components/LocationInfo";
import ErrorMessage from "./components/ErrorMessage";
import MapComponent from "./components/MapComponent";
import "./App.css";
import pin from "./assets/pin.svg";
import Skeleton from "./components/Skeleton";

const App = () => {
  const [postalCode, setPostalCode] = useState("");
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.zippopotam.us/in/${postalCode}`
      );
      setLocationData(response.data);
    } catch (err) {
      setError("Error fetching location information. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setPostalCode("");
    setLocationData(null);
    setError(null);
  };

  if (loading) {
    return (
      <div className=''>
        <Skeleton />
      </div>
    );
  }

  if (locationData && !loading && !error) {
    console.log(locationData);
    return (
      <div className='app-result-container'>
        <div className='result-sidebar'>
          <div className='logo'>
            <img src={pin} alt='' />
            <h3>
              <span>Zip</span>Find
            </h3>
          </div>
          {locationData && <LocationInfo locationData={locationData} />}
        </div>
        <div className='result-map'>
          <div className='result-map-header'>
            <p>
              <img
                src={pin}
                alt=''
                style={{
                  marginBottom: "-7px",
                  marginRight: "10px",
                }}
              />
              {postalCode}
            </p>
            <button className='clear-btn' onClick={handleClear}>
              Clear
            </button>
          </div>
          <MapComponent
            latitude={locationData.places[0].latitude}
            longitude={locationData.places[0].longitude}
          />
        </div>
      </div>
    );
  }

  return (
    <div className='app-container'>
      <h1>Simply just provide the ZIP.</h1>
      <p>
        Explore effortlessly with ZipFind—a reliable companion for accurate zip
        code discovery. From cities to neighborhoods, navigate seamlessly with
        advanced mapping.
      </p>
      <PostalCodeInput
        postalCode={postalCode}
        onPostalCodeChange={handlePostalCodeChange}
        onSubmit={handleSubmit}
      />

      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default App;
