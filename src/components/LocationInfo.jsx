// LocationInfo.js
import React from "react";
import styles from "./LocationInfo.module.css";
import pin from "../assets/pin.svg";

//HEALPER COMPONENT
const LocationComponent = ({ place, country }) => {
  return (
    <>
      <div className={styles.locationContainer}>
        <img src={pin} alt='' />
        <div>
          <p className={styles.placeName}>{place["place name"]}</p>
          <p className={styles.locationInfo}>
            {place.state}, {country}
          </p>
        </div>
      </div>
    </>
  );
};

//MAIN COMPONENT
const LocationInfo = ({ locationData }) => {
  const state = locationData.places[0].state;
  return (
    <div className={styles.locationInfo}>
      <div className={styles.locationCard}>
        <div className={styles.locationAbbreviation}>
          <p>{locationData["country abbreviation"]}</p>
        </div>
        <p className={styles.locationInfoCountry}>{locationData.country}</p>
        <p className={styles.locationInfoState}>{state}</p>
        <div className={styles.locationCoordinates}>
          <div>
            <p className={styles.locationInfoText}>LATTITUDE</p>
            <span> {locationData.places[0].latitude}°</span>
          </div>
          <div>
            <p className={styles.locationInfoText}>LONGITUDE</p>
            <span> {locationData.places[0].longitude}°</span>
          </div>
        </div>
      </div>
      <br />
      <div className={styles.locationPlaces}>
        <h2>Places</h2>
        {locationData.places.map((place, index) => (
          <LocationComponent
            key={index}
            place={place}
            country={locationData.country}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationInfo;
