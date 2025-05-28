import Menu from "../Menu/Menu";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Promotion = ({ title, description, image, isLeft }) => {
  const navigate = useNavigate();
  if (isLeft) {
    return (
      <div
        style={{
          display: "flex",
          width: "60%",
          justifyContent: "flex-end",
        }}
      >
        <div
          className="promotion-container"
          style={{
            display: "flex",

            backgroundColor: "#d9caa0",
            width: "40vw",
            borderRadius: "1.5vw",
            position: "relative",
            justifyContent: "flex-end",
            marginBottom: "5vw",
          }}
        >
          <div>
            <img
              src={image}
              alt={title}
              className="featured-image"
              style={{
                position: "absolute",
                width: "27vw",
                height: "33vw",
                left: "-12vw",
                bottom: "2vw",
                borderRadius: "3vw",
                zIndex: 2,
              }}
            />
          </div>

          <div
            className="promotion-info"
            style={{
              width: "22vw",
              paddingLeft: "2vw",
              paddingRight: "2vw",
              paddingBottom: "13vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              className="promotion-title"
              style={{
                fontSize: "3.1vw",
                marginBottom: 10,
                fontFamily: "amiko",
                lineHeight: 1.1,
              }}
            >
              {title}
            </h1>
            <p
              className="promotion-description"
              style={{
                marginTop: 20,
                fontSize: "1.3vw",
                fontFamily: "amiko",
                textAlign: "left",
              }}
            >
              {description}
            </p>
            <div className="promotion-button-container">
              <button
                style={{
                  marginRight: "1vw",
                }}
                className="featured-item-button"
                onClick={() => navigate("/menu")}
              >
                Menu{""}
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
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          width: "60%",
          alignItems: "start",
        }}
      >
        <div
          className="promotion-container"
          style={{
            display: "flex",

            backgroundColor: "#d9caa0",
            width: "40vw",
            borderRadius: "1.5vw",
            position: "relative",
            marginBottom: "5vw",
          }}
        >
          <div>
            <img
              src={image}
              alt={title}
              className="featured-image"
              style={{
                position: "absolute",
                width: "27vw",
                height: "33vw",
                right: "-12vw",
                bottom: "2vw",
                borderRadius: "3vw",
                zIndex: 2,
              }}
            />
          </div>

          <div
            className="promotion-info"
            style={{
              width: "22vw",
              paddingLeft: "2vw",
              paddingRight: "2vw",
              paddingBottom: "13vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              className="promotion-title"
              style={{
                fontSize: "3.1vw",
                marginBottom: 10,
                fontFamily: "amiko",
                lineHeight: 1.1,
              }}
            >
              {title}
            </h1>
            <p
              className="promotion-description"
              style={{
                marginTop: 20,
                fontSize: "1.3vw",
                fontFamily: "amiko",
                textAlign: "left",
              }}
            >
              {description}
            </p>
            <div className="promotion-button-container">
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
      </div>
    );
  }
};

export default Promotion;
