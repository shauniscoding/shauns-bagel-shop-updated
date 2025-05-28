import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturedItem = ({ title, description, image, isLeft }) => {
  const navigate = useNavigate();

  if (isLeft) {
    return (
      <div className="featured-item">
        <div>
          <img
            src={image}
            alt={title}
            className="featured-image"
            style={{
              position: "absolute",
              width: "27.5vw",
              height: "29vw",
              top: "-6vw",
              left: "-1vw",
              zIndex: 2,
            }}
          />
        </div>

        <div
          className="featured-content"
          style={{
            paddingLeft: "28vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            marginTop: "3vw",
            marginBottom: "3vw",
          }}
        >
          <h1
            className="featured-title"
            style={{
              fontSize: "5vw",
              maxWidth: "30vw",
              marginBottom: 10,
              marginTop: 0,
              fontFamily: "amiko",
              lineHeight: 0.8,
            }}
          >
            {title}
          </h1>
          <p
            className="featured-description"
            style={{
              fontSize: "1.4vw",
              maxWidth: "37vw",
              marginTop: 10,
              marginBottom: 0,
              fontFamily: "amiko",
              lineHeight: 1.1,
            }}
          >
            {description}
          </p>
          <div style={{ display: "flex", marginTop: "1vw" }}>
            <button
              style={{
                marginRight: "1vw",
              }}
              className="featured-item-button"
              onClick={() => navigate("/menu")}
            >
              Menu{" "}
            </button>
            <button
              className="featured-item-button"
              onClick={() => navigate("/locations")}
            >
              Locations{" "}
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="featured-item">
        <div
          className="featured-content"
          style={{
            paddingLeft: "10vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            marginTop: "3vw",
            marginBottom: "3vw",
          }}
        >
          <h1
            className="featured-title"
            style={{
              fontSize: "5vw",
              maxWidth: "30vw",
              marginBottom: 10,
              marginTop: 0,
              fontFamily: "amiko",
              lineHeight: 0.8,
            }}
          >
            {title}
          </h1>
          <p
            className="featured-description"
            style={{
              fontSize: "1.4vw",
              maxWidth: "37vw",
              marginTop: 10,
              marginBottom: 0,
              fontFamily: "amiko",
              lineHeight: 1.1,
            }}
          >
            {description}
          </p>
          <div style={{ display: "flex", marginTop: "1vw" }}>
            <button
              style={{
                marginRight: "1vw",
              }}
              className="featured-item-button"
              onClick={() => navigate("/menu")}
            >
              Menu{" "}
            </button>
            <button
              className="featured-item-button"
              onClick={() => navigate("/locations")}
            >
              Locations{" "}
            </button>
          </div>
        </div>

        <div>
          <img
            src={image}
            alt={title}
            className="featured-image"
            style={{
              position: "absolute",
              width: "27.5vw",
              height: "29vw",
              top: "-4vw",
              right: "-1vw",
              zIndex: 2,
            }}
          />
        </div>
      </div>
    );
  }
};

export default FeaturedItem;
