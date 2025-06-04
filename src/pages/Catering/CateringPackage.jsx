const CateringPackage = ({ title, description, image, details, price }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "70%",
        backgroundColor: "#D9CAA0",
        borderRadius: "5vw",
        marginBottom: "5vw",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        overflow: "hidden",
        alignItems: "flex-start", // allows text to grow taller than image
      }}
    >
      {/* Image container with fixed width and 1:1 aspect ratio */}
      <div style={{ width: "27vw", aspectRatio: "1", margin: "2vw" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "3vw",
          }}
        />
      </div>

      {/* Text content on the right */}
      <div
        style={{
          padding: "2vw",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h1 style={{ margin: 0, fontSize: "3.3vw" }}>{title}</h1>
        <p style={{ marginTop: "0.5vw", marginBottom: "0.5vw", fontSize: "2vw" }}>{description}</p>
        <ul style={{ paddingLeft: "1.2vw", margin: 0 }}>
          {details.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.3vw", fontSize: "1.3vw" }}>
              {item}
            </li>
          ))}
        </ul>
        <h2 style={{ fontWeight: "bold", marginTop: "0.5vw" }}>{price}</h2>

        </div>
      </div>
  );
};
