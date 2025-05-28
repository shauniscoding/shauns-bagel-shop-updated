import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./Menu.css";

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++)
    stars.push(<FaStar key={`full-${i}`} color="#FFD700" />);
  if (halfStar) stars.push(<FaStarHalfAlt key="half" color="#FFD700" />);
  for (let i = 0; i < emptyStars; i++)
    stars.push(<FaRegStar key={`empty-${i}`} color="#FFD700" />);

  return stars;
};

const MenuItem = ({ image, name, description, rating, price }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "12vw",
        display: "flex",
        alignItems: "center",
        padding: "1vw",
        boxSizing: "border-box",
        gap: "1vw",
        borderRadius: "0.5vw",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "10vw",
          height: "10vw",
          objectFit: "cover",
          borderRadius: "0.5vw",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ marginBottom: "0.5vw" }}>
          <h1 style={{ fontSize: "2.5vw", marginBottom: "0.3vw" }}>{name}</h1>
          <p
            style={{ marginTop: "0vw", fontSize: "0.9vw", marginLeft: "0.4vw" }}
          >
            {description}
          </p>

          <div
            style={{
              marginTop: "0.5vw",
              display: "flex",
              alignItems: "center",
              gap: "0.4vw",
              fontSize: "1.3vw",
            }}
          >
            <span style={{ fontWeight: "bold" }}>{rating.toFixed(1)}</span>
            <div style={{ display: "flex", gap: "0.2vw" }}>
              {renderStars(rating)}
            </div>
          </div>

          <p style={{ fontSize: "1.4vw", marginTop: "0.3vw" }}>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
