const CateringPackage = ({ title, description, image, details, price, isLeft }) => {
  if (isLeft) {
    return (
      <div
        style={{
          display: "flex",
          // width: "60%",
          justifyContent: "flex-end",
        }}
      >
        <div
          className="package-container"
          style={{
            display: "flex",
            backgroundColor: "#d9caa0",
            width: "70vw",
            borderRadius: "5vw",
            position: "relative",
            justifyContent: "flex-end",
            marginBottom: "13vw",
          }}
        >
          <div>
            <img
              src={image}
              alt={title}
              className="package-image"
              style={{
                position: "absolute",
                width: "29vw",
                height: "29vw",
                left: "-3vw",
                top: "-3vw",
                borderRadius: "5vw",
                zIndex: 2,
              }}
            />
          </div>

          <div
            className="package-info"
            style={{
              width: "32vw",
              marginRight: "7vw",
              paddingLeft: "2vw",
              paddingRight: "2vw",
              paddingBottom: "5vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",    
            }}
          >
            <h1
              className="package-title"
              style={{
                fontSize: "3.7vw",
                marginBottom: "0px",
                fontFamily: "amiko",
                lineHeight: 1.1,
              }}
            >
              {title}
            </h1>
            <p
              className="package-description"
              style={{
                marginTop: "0.2vw",
                fontSize: "1.7vw",
                fontFamily: "amiko",
                textAlign: "left",
                marginBottom: "3vw",
              }}
            >
              {description}
            </p>
            
             <ul
              style={{
                margin: 0,
                paddingLeft: "1.2vw",         
                listStylePosition: "outside",  
                fontSize: "1.3vw",
                fontFamily: "amiko",
                                fontSize: "1.7vw",

              }}
            >
              {details.map((deets, index) => (
                <li key={index}>{deets}</li>
              ))}
            </ul>


            <h1 style={{ textAlign: "left" }}   >{price}</h1>

          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          // width: "60%",
          justifyContent: "flex-end",
        }}
      >
        <div
          className="package-container"
          style={{
            display: "flex",
            backgroundColor: "#d9caa0",
            width: "70vw",
            borderRadius: "5vw",
            position: "relative",
            justifyContent: "flex-end",
            marginBottom: "13vw",
          }}
        >
          <div>
            <img
              src={image}
              alt={title}
              className="package-image"
              style={{
                position: "absolute",
                width: "29vw",
                height: "29vw",
                right: "-3vw",
                top: "-3vw",
                borderRadius: "5vw",
                zIndex: 2,
              }}
            />
          </div>

          <div
            className="package-info"
            style={{
              width: "32vw",
              marginRight: "27vw",
              paddingLeft: "2vw",
              paddingRight: "2vw",
              paddingBottom: "5vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",    
            }}
          >
            <h1
              className="package-title"
              style={{
                fontSize: "3.7vw",
                marginBottom: "0px",
                fontFamily: "amiko",
                lineHeight: 1.1,
              }}
            >
              {title}
            </h1>
            <p
              className="package-description"
              style={{
                marginTop: "0.2vw",
                fontSize: "1.7vw",
                fontFamily: "amiko",
                textAlign: "left",
                marginBottom: "3vw",
              }}
            >
              {description}
            </p>
            
             <ul
              style={{
                margin: 0,
                paddingLeft: "1.2vw",         
                listStylePosition: "outside",  
                fontSize: "1.3vw",
                fontFamily: "amiko",
                                fontSize: "1.7vw",

              }}
            >
              {details.map((deets, index) => (
                <li key={index}>{deets}</li>
              ))}
            </ul>


            <h1 style={{ textAlign: "left" }}   >{price}</h1>

          </div>
        </div>
      </div>
    );
  }
};

export default CateringPackage;   