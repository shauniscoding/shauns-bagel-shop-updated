import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import buffet from "/images/buffet.jpg";
import bread from "/images/bread.png";
import people from "/images/people.png";
import deal from "/images/deal.png";
import event from "/images/event.png";
import delivery from "/images/delivery.png";
import CateringPackage  from "./CateringPackage";
import morningMixer from "/images/morningMixerPromotion.webp";
import breakfastBoss from "/images/breakfastBoss.jpg"
import donutDisturb from "/images/donutDisturb.webp";
import bagelBar from "/images/bagelBar.jpg"
import lightStart from "/images/lightStart.jpg";
import { useNavigate } from "react-router-dom";


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

const cateringPackages = [ 
  {
    title: "The Morning Mixer",
    description: "Perfect for: Small teams, casual brunches, morning meetups",
    price: "$89.99",
    image: morningMixer, 
    details: [
      "-Assorted fresh-baked bagels (12)",
      "-Choice of 3 cream cheeses (plain, veggie, cinnamon swirl)",
      "-Mini muffin tray (12)",
      "-Coffee traveler (serves 10)",
      "-Utensils, napkins, and cups included",
      "-Serves: 8-10 people"
    ],
    isLeft: true,
  },

  {
    title: "The Breakfast Boss",
    description: "Perfect for: Offices, morning training sessions, events",
    price: "$149.99",
    image: breakfastBoss, 
    details: [
      "-10 hot breakfast sandwiches (egg, cheese, meat or veggie options)",
      "-Bagel platter (8 assorted)",
      "-Fruit salad bowl",
      "-Two coffee travelers OR juice carafes",
      "-Serves: 10–12 people",
    ],
    isLeft: false,
  },

  {
    title: "Donut Disturb",
    description: "Perfect for: Sweet tooths, celebratory mornings, dessert-first crews",
    price: "$99.99",
    image: donutDisturb, 
    details: [
      "-Assorted donuts & pastries (18 pcs)",
      "-Cinnamon rolls (6 large)",
      "-Glazed donut holes tray",
      "-1 gallon cold brew coffee",
      "-Serves: 10–14 people",
    ],
    isLeft: true,
  },

  {
    title: "Build-Your-Own Bagel Bar",
    description: "Perfect for: DIY lovers, client breakfasts, early morning parties",
    price: "$179.99",
    image: bagelBar, 
    details: [
      "-Assorted sliced bagels (18 halves)",
      "-Cream cheese trio, butter, jam",
      "-Scrambled eggs, breakfast sausage & bacon on the side",
      "-Fresh fruit tray",
      "-Orange juice & water bottles",
      "-Serves: 12–15 people",
    ],
    isLeft: false,
  },

  {
    title: "Light Start",
    description: "Perfect for: Quick meetings, low-key mornings",
    price: "$59.99",
    image: lightStart, 
    details: [
      "-Mini bagels (12)",
      "-Mixed fruit cups (12)",
      "-Muffins (6)",
      "-Orange juice (1L)",
      "-Serves: 6-8 people",
    ],
    isLeft: true,
  },


]

const orderInstructions = [
  {
    image: "https://static.thenounproject.com/png/1633691-200.png",
    title: "Package",
    instruction: "Choose a package from our options and customize it"
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/025/722/250/non_2x/order-food-icon-logo-isolated-on-white-background-vector.jpg",
    title: "Order",
    instruction: "Call or email us the details of your order"
  },
  {
    image: "https://www.clipartmax.com/png/middle/310-3105814_daily-confirmation-confirmation-line-icon-icon.png",
    title: "Confirmation",
    instruction: "Give us up to 24 hours to confirm your order"
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/124/124418.png",
    title: "Pickup",
    instruction: "Pick up your order at our location or request delivery"
  }
]




const Catering = () => {
  const navigate = useNavigate();

  return (
    <>
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
        <h1 style={{ fontSize: "2.8vw", margin: 0 }}>Perfect for any morning!</h1>
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

        <h1 style={{fontSize: "6vw", fontFamily: "Arial, sans-serif", marginTop: "10vw", textAlign: "center"}}>
          Our Packages
        </h1>

        {cateringPackages.map((packageItem, index) => (
          <CateringPackage
            key={index}
            title={packageItem.title}
            description={packageItem.description}
            price={packageItem.price}
            image={packageItem.image}
            details={packageItem.details}
            isLeft={packageItem.isLeft}
          />
        )
        )}

      {/* ordering instructions */}
      <div
        style={{
          backgroundColor: "#D9CAA0",
          width: "80%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginBottom: "5vw",
          borderRadius: "3vw",
          marginBottom: "8vw"
        }}
      >

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", 
          justifyContent: "center",
          paddingLeft: "6vw",
          paddingRight: "6vw",
          paddingTop: "3vw",
          paddingBottom: "3vw",
        }}>

          <h1 style={{ fontSize: "4.5vw", textAlign: "center", width: "100%", marginTop: "0px" }}>
            Ready to Order?
          </h1>

          {orderInstructions.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "0.5vw",
                margin: "1vw 0",
                width: "100%", 
              }}
            >
              <div
                  style={{
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "3vw",
                    height: "3vw",
                    borderRadius: "50%",
                    overflow: "hidden", 
                  }}
                >
                  <img
                    src={item.image}
                    style={{
                      width: "80%",
                      height: "80%",
                      objectFit: "cover",
                    }}
                  />
                </div>


              <h2 style={{ margin: 0, fontSize:"2.7vw" }}>{item.title}</h2>
              <p style={{ margin: 0 , fontSize:"2vw"}}> - {item.instruction}</p>
            </div>
          ))}

          <div className="promotion-button-container" style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "2vw", gap: "2vw",}}>
              <button
                style={{
                  width: "13vw",
                  height: "4vw",
                }}
                className="featured-item-button"
                onClick={() => navigate("/menu")}
              >
                Menu{""}
              </button>
              <button
                style={{
                    width: "13vw",
                    height: "4vw",
                  }}
                className="featured-item-button"
                onClick={() => navigate("/locations")}
              >
                Locations{" "}
              </button>
            </div>
        </div>

        </div>

         
    </div>
      <Footer />
    </>

  );
};

export default Catering;
