import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import buffet from "/images/buffet.jpg";
import bread from "/images/bread.png";
import people from "/images/people.png";
import deal from "/images/deal.png";
import event from "/images/event.png";
import delivery from "/images/delivery.png";


const iconData = [
  {
    image: bread,
    description: "Food made Fresh",
  },
  {
    image: delivery,
    description: "Fast Delivery",
  },
  {
    image: people,
    description: "Packages for Everyone",
  },
  {
    image: deal,
    description: "Fantastic Deals",
  },
  {
    image: event,
    description: "Perfect for any event",
  },
];

const Catering = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      <div className="catering-splash-screen" style={{ position: "relative" }}>
        <img
          src={buffet}
          alt="Buffet"
          style={{
            width: "100vw",
            height: "70vh",
            objectFit: "cover",
            display: "block",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
            fontSize: "6vw",
            // fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            width: "90%",
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            textAlign: "center",
          }}
        >
          We Bring the Breakfast to You!
        </div>
      </div>


      <div style={{ width: "100%", textAlign: "center", marginBottom: "0.6vw" }}>
        <h1 style={{ fontSize: "2.8vw", margin: 0 }}>Perfect for any morning</h1>
      </div>

      <div
        className="catering-icons-container"
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))`,
          gap: "1vw",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {iconData.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              maxWidth: "20vw",
                        marginTop:"0px"

            }}
          >
            <div
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <img
                src={item.image}
                alt={`icon-${idx}`}
                style={{
                  width: "50%",
                  height: "50%",
                  objectFit: "cover",
                }}
              />
            </div>

            <h2
              style={{
                fontSize: "1.7vw",
                margin: 0,
              }}
            >
              {item.description}
            </h2>
          </div>
        ))}
      </div>


      {/* <Footer /> */}
    </div>
  );
};

export default Catering;
