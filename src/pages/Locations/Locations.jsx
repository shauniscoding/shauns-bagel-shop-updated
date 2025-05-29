import "./Locations.css";
import Navbar from "../Navbar/Navbar.jsx";
import location from "/images/location.png";
import bagelPin from "/images/bagelPin.png";
import LocationItem from "./LocationItem.jsx";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import React, { useState, useEffect } from "react";

// todo conevrt all address to geo location
// center location should be user's current location
//  compare the geo location with the center location
// allow user to enter an address than use that as the center location and also find closer locations

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const dummyLocations = [
  {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
    city: "Seattle",
    street: "456 Maple Ave",
    miles: "1.2",
    phone: "(555) 987-6543",
    hours: "9am - 8pm",
    address: "456 Maple Ave, Seattle, WA 98101",
    geolocation: [40.184662, -80.2656],
  },
  {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
    city: "Los Angeles",
    street: "789 Sunset Blvd",
    miles: "3.5",
    phone: "(555) 321-7890",
    hours: "10am - 9pm",
    address: "789 Sunset Blvd, Los Angeles, CA 90028",
    geolocation: [34.09809, -118.311448],
  },
  {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
    city: "Chicago",
    street: "1010 Lake Shore Dr",
    miles: "0.8",
    phone: "(555) 555-1234",
    hours: "8am - 6pm",
    address: "1010 Lake Shore Dr, Chicago, IL 60611",
    geolocation: [41.89194, -87.61092],
  },
  {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
    city: "New York",
    street: "300 Broadway",
    miles: "2.1",
    phone: "(555) 111-2222",
    hours: "7am - 7pm",
    address: "300 Broadway, New York, NY 10007",
    geolocation: [40.712776, -74.005974],
  },
  {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
    city: "Austin",
    street: "800 Congress Ave",
    miles: "4.0",
    phone: "(555) 999-8888",
    hours: "11am - 10pm",
    address: "800 Congress Ave, Austin, TX 78701",
    geolocation: [30.2672, -97.7431],
  },
  {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
    city: "San Francisco",
    street: "123 Market St",
    miles: "0.5",
    phone: "(555) 234-5678",
    hours: "6am - 6pm",
    address: "123 Market St, San Francisco, CA 94103",
    geolocation: [37.7749, -122.4194],
  },
  {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
    city: "Miami",
    street: "555 Ocean Dr",
    miles: "1.9",
    phone: "(555) 777-7777",
    hours: "10am - 10pm",
    address: "555 Ocean Dr, Miami, FL 33139",
    geolocation: [25.7617, -80.1918],
  },
  {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
    city: "Denver",
    street: "2100 Blake St",
    miles: "2.6",
    phone: "(555) 333-4444",
    hours: "9am - 5pm",
    address: "2100 Blake St, Denver, CO 80205",
    geolocation: [39.7392, -104.9903],
  },
  {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
    city: "Boston",
    street: "600 Boylston St",
    miles: "1.0",
    phone: "(555) 876-5432",
    hours: "8am - 8pm",
    address: "600 Boylston St, Boston, MA 02116",
    geolocation: [42.3601, -71.0589],
  },
  {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
    city: "Portland",
    street: "200 Burnside St",
    miles: "0.7",
    phone: "(555) 111-3333",
    hours: "7am - 9pm",
    address: "200 Burnside St, Portland, OR 97209",
    geolocation: [45.5236, -122.675],
  },
];

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

          // Calculate distances once after getting user location
          dummyLocations.forEach((location) => {
            location.miles = getDistanceMiles(
              userLoc.lat,
              userLoc.lng,
              location.geolocation[0],
              location.geolocation[1]
            ).toFixed(2);
          });

          // If you want to force re-render after updating dummyLocations
          // you can also use state to store dummyLocations, or just force update.
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  // Second useEffect to sort locations based on distance from given location
  useEffect(() => {
    if (!userLocation) return;

    const sortedLocations = [...dummyLocations]
      .map((location) => {
        const miles = getDistanceMiles(
          userLocation.lat,
          userLocation.lng,
          location.geolocation[0],
          location.geolocation[1]
        );
        return { ...location, miles: miles.toFixed(2) };
      })
      .filter((location) => parseFloat(location.miles) < distance)
      .sort((a, b) => parseFloat(a.miles) - parseFloat(b.miles));

    setSortedLocations(sortedLocations);
  }, [userLocation, distance]);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    console.error("Google Maps API key is not defined.");
    return <div>Error: Google Maps API key is not defined.</div>;
  }

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
            <input
              type="text"
              placeholder="Address, City, or Zip Code"
              className="input-location"
            />

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
          </select>
        </div>

        <div className="locations-list-container">
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
        </div>
      </aside>

      <div className="vertical-line"></div>

      <div className="google-map-container">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
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

            {dummyLocations.map((location, index) => (
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
        </LoadScript>
      </div>
    </div>
  );
};
export default Locations;
