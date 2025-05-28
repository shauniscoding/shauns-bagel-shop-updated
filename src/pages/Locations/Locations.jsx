import location from "/images/location.png";
import bagelPin from "/images/bagelPin.png";
import LocationItem from "./LocationItem.jsx";
import {
  GoogleMap,
  LoadScript,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

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

const Locations = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    console.error("Google Maps API key is not defined.");
    return <div>Error: Google Maps API key is not defined.</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <aside
        className="menu-container"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "26vw",
          height: "100vh",
          borderRight: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: "1vw",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ fontSize: "2.1vw", marginBottom: "0px" }}>
          Find a Location
        </h1>
        <div
          style={{
            position: "relative",
            width: "80%",
          }}
        >
          <input
            type="text"
            placeholder="Address, City, or Zip Code"
            style={{
              width: "100%",
              height: "45px",
              padding: "0 40px 0 10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <span
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "20px",
              color: "#888",
              pointerEvents: "none",
            }}
          >
            <img
              src={location}
              alt="icon"
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "1vw",
                height: "1vw",
                pointerEvents: "none",
              }}
            />
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1vw",
            width: "100%",
            height: "100%",
            overflowY: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            boxSizing: "border-box",
            marginTop: "1vw",
          }}
        >
          {dummyLocations.map((location, index) => (
            <LocationItem
              key={index}
              image={location.image}
              city={location.city}
              street={location.street}
              miles={location.miles}
              phone={location.phone}
              hours={location.hours}
              address={location.address}
            />
          ))}
        </div>
      </aside>

      <div
        style={{
          backgroundColor: "#D9CAA0",
          width: "5px",
          height: "92vh",
          position: "fixed",
          left: "26vw",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      ></div>

      <div
        className="menu-items-container"
        style={{
          width: "72%",
          height: "92%",
          position: "fixed",
          marginLeft: "2vw",
          left: "25vw",
          marginTop: "2vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "100%",
              borderRadius: "1vw",
            }}
            center={center}
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
            <Marker position={center} title="Center Location" />

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
