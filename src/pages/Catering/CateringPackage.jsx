import { useNavigate } from "react-router-dom";

const CateringPackage = ({ title, description, image, details, price, isLeft }) => {
  const navigate = useNavigate();

  if (isLeft) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div className="package-container">
          <div>
            <img src={image} alt={title} className="package-image" style={{left:"-11vw"}}/>
          </div>

          <div className="package-info">
            <h1 className="package-title">
              {title}
            </h1>
            <p className="package-description">
              {description}
            </p>
            
             <ul className="package-list">
              {details.map((deets, index) => (
                <li key={index}>{deets}</li>
              ))}
            </ul>


            <h1 style={{ textAlign: "left" }}> {price} </h1>

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
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div className="package-container">
          <div>
            <img src={image} alt={title} className="package-image" style={{right:"-11vw"}}/>
          </div>

          <div className="package-info" style={{marginRight: "25vw",}} >
            <h1 className="package-title" style={{textAlign: "left"}}>
              {title}
            </h1>
            <p className="package-description" style={{textAlign: "left"}}>
              {description}
            </p>
            
             <ul className="package-list" >
              {details.map((deets, index) => (
                <li key={index}>{deets}</li>
              ))}
            </ul>

            <h1 style={{ textAlign: "left" }}> {price} </h1>
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
      </div>
    );
  }
};

export default CateringPackage;   