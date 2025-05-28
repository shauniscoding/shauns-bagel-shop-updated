const LocationItem = ({
  image,
  city,
  street,
  miles,
  phone,
  hours,
  address,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "flex-start",
        padding: "1vw",
        borderBottom: "1px solid #ccc",
        fontFamily: "sans-serif",
        gap: "1vw",
        cursor: "pointer",
      }}
    >
      <img
        src={image}
        alt={`${city} location`}
        style={{
          width: "9vw",
          height: "7vw",
          objectFit: "cover",
          borderRadius: "0.5vw",
        }}
      />

      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: "1.3vw",
            fontWeight: "bold",
          }}
        >
          {city} - {street}
        </div>

        <div
          style={{
            fontSize: "0.8vw",
            color: "#665",
            marginTop: "0.3vw",
          }}
        >
          {miles} mi · {phone} · {hours}
        </div>

        <div
          style={{
            fontSize: "1vw",
            marginTop: "0.9vw",
          }}
        >
          {address}
        </div>
      </div>
    </div>
  );
};

export default LocationItem;
