import "./Locations.css";
import Navbar from "../Navbar/Navbar.jsx";
import location from "/images/location.png";
import bagelPin from "/images/bagelPin.png";
import LocationItem from "./LocationItem.jsx";
import loading from "/images/loading.gif";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
  useLoadScript,
} from "@react-google-maps/api";
import React, { useState, useEffect } from "react";

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

// Function to calculate distance in miles between two geolocations
const getDistanceMiles = (lat1, lon1, lat2, lon2) => {
  const toRadians = (deg) => (deg * Math.PI) / 180;
  const R = 3959; // Earth radius in miles

  const φ1 = toRadians(lat1);
  const φ2 = toRadians(lat2);
  const Δφ = toRadians(lat2 - lat1);
  const Δλ = toRadians(lon2 - lon1);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in miles
};

const Locations = () => {
  const [mapCenter, setMapCenter] = useState(center);
  const [userLocation, setUserLocation] = useState(null);
  const [sortedLocations, setSortedLocations] = useState([]);
  const [distance, setDistance] = useState("100");
  const [isLoadingTable, setIsLoading] = useState(true);
  const [locationsData, setLocationsData] = useState([]);
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      const location = place?.geometry?.location;

      if (location) {
        const newCenter = {
          lat: location.lat(),
          lng: location.lng(),
        };
        setMapCenter(newCenter);
        setUserLocation(newCenter);
      }
    } else {
      console.log("Autocomplete not loaded yet!");
    }
  };


  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const apiKey1 = import.meta.env.VITE_API_KEY;
  const apiKey2 = import.meta.env.VITE_API_KEY_2;
  const apiKey3 = import.meta.env.VITE_API_KEY_3;


  const { isLoadedMap, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  
   useEffect(() => {
    fetch("https://shauns-bagel-shop-backend.onrender.com/locations", {
      method: "GET",
      headers: {
        "api-key-1": apiKey1,
        "api-key-2": apiKey2,
        "api-key-3": apiKey3,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLocationsData(data);
      })
      .catch((error) => console.error("Error fetching locations:", error))
      .finally(() => setIsLoading(false));
  }, []);

  // 2. Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLoc = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userLoc);
          setMapCenter(userLoc);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  // 3. Sort/filter once both location and data are ready + every time `distance` changes
  useEffect(() => {
    if (!userLocation || locationsData.length === 0) return;

    const sorted = locationsData
      .map((location) => {
        const miles = getDistanceMiles(
          userLocation.lat,
          userLocation.lng,
          location.geolocation[0],
          location.geolocation[1]
        );
        return { ...location, miles: miles.toFixed(2) };
      })
      .filter((loc) => parseFloat(loc.miles) <= parseFloat(distance))
      .sort((a, b) => parseFloat(a.miles) - parseFloat(b.miles));

    setSortedLocations(sorted);
  }, [userLocation, locationsData, distance]);

  if (!apiKey) {
    console.error("Google Maps API key is not defined in env.");
    return <div>Error: Google Maps API key is not defined.</div>;
  }

  if (isLoadingTable || isLoadedMap) {
    return <div>Loading...</div>;
  }
  
    if (loadError) return <div>Error loading maps</div>;


  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <Navbar />

      <aside className="locations-sidebar-container">
        <h1 style={{ fontSize: "2.1vw", marginBottom: "0px" }}>
          Find a Location
        </h1>

        <div
          style={{
            display: "flex",
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "80%",
            }}
          >
             <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <input
                type="text"
                placeholder="Enter location"
                className="input-location"
                style={{ width: 300, height: 45, padding: 10 }}
              />
            </Autocomplete>


            <span className="location-icon-container">
              <img src={location} alt="icon" />
            </span>
          </div>

          <select
            className="distance-drop-down"
            onChange={(e) => setDistance(e.target.value)}
          >
            <option value="1">1 mile</option>
            <option value="5">5 miles</option>
            <option value="10">10 miles</option>
            <option value="25">25 miles</option>
            <option value="50">50 miles</option>
            <option value="100">100 miles</option>
            <option value="150">150 miles</option>
            <option value="500">500 miles</option>
            <option value="1000">1000 miles</option>
            <option value="9000000000000000">All</option>
          </select>
        </div>

        {isLoadingTable ? (<div className="locations-list-container" style={{justifyContent: "center", alignItems: "center"}}>
            <img src={loading} style={{width:"5vw", height: "5vw"}}/>
        </div>) : (<div className="locations-list-container">
          {sortedLocations.length === 0 ? (
            <p>No locations within {distance} miles.</p>
          ) : (
            sortedLocations.map((location, index) => (
              <LocationItem
                key={index}
                image={location.image}
                city={location.city}
                street={location.street}
                miles={location.miles}
                phone={location.phone}
                hours={location.hours}
                address={location.address}
                onClick={() => {
                  setMapCenter({
                    lat: location.geolocation[0],
                    lng: location.geolocation[1],
                  });
                  console.log("Clicked:", location.city);
                }}
              />
            ))
          )}
        </div> )
        }

      </aside>

      <div className="vertical-line"></div>

      <div className="google-map-container">
        {isLoadedMap ? (<img src={loading} style={{width:"5vw", height: "5vw"}}/>) : (
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "100%",
              borderRadius: "1vw",
            }}
            center={mapCenter}
            zoom={14}
            options={{
              mapTypeControl: false, // Hide map type buttons (Satellite, Terrain, etc)
              mapTypeId: "roadmap", // Force the map to show only the roadmap style
              streetViewControl: false, // Optional: hide Street View pegman
              fullscreenControl: false, // Optional: hide fullscreen control
              minZoom: 4,
              maxZoom: 10,
            }}
          >
            <Marker position={userLocation} title="Center Location" />

            {locationsData.map((location, index) => (
              <Marker
                key={index}
                position={{
                  lat: location.geolocation[0],
                  lng: location.geolocation[1],
                }}
                title={location.city}
                icon={{
                  url: bagelPin,
                }}
              />
            ))}
          </GoogleMap>
          )}
      </div>
    </div>
  );
};
export default Locations;
