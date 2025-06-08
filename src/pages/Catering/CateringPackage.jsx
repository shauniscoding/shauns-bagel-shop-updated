const CateringPackage = ({ title, description, image, details, price, isLeft }) => {
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
            <img src={image} alt={title} className="package-image" style={{left:"-3vw"}}/>
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
            <img src={image} alt={title} className="package-image" style={{right:"-3vw"}}/>
          </div>

          <div className="package-info" style={{marginRight: "27vw",}} >
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
          </div>
        </div>
      </div>
    );
  }
};

export default CateringPackage;   