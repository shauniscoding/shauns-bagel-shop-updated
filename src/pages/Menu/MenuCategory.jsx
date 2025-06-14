import "./Menu.css";

const MenuCategory = ({ image, category, onClick }) => {
  return (
  <div
    className="menu-category"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "14vw",
      height: "4vw",
      flexShrink: 0,
      borderRadius: "1vw",
      position: "relative",
      overflow: "hidden",
    }}
    onClick={onClick}
  >
    {/* Overlay */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.11)", // semi-transparent black overlay
        borderRadius: "1vw",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />

    {/* Text */}
    <h1
      style={{
        position: "relative",
        bottom: "-0.6vw",
        right: "-1vw",
        fontSize: "1.4vw",
        fontWeight: "bold",
        color: "#f9f5eb", // white text for better contrast
        zIndex: 2,
        textShadow: "0 0 5px rgba(0,0,0,0.7)", // subtle shadow for readability
      }}
      className="menu-category-text"
    >
      {category}
    </h1>
  </div>
);

};

export default MenuCategory;
