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
      }}
      onClick={onClick}
    >
      <h1
        style={{
          position: "relative",
          bottom: "-0.6vw",
          right: "-1vw",
          fontSize: "1.4vw",
          fontWeight: "bold",
          color: "black",
        }}
        className="menu-category-text"
      >
        {category}
      </h1>
    </div>
  );
};

export default MenuCategory;
