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
import "./Catering.css";


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

      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "70vh",
          backgroundImage: 'url("https://www.mashed.com/img/gallery/the-truth-about-hotel-breakfast-buffets/intro-1609346085.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          padding: "0 5vw",
          boxSizing: "border-box",
          // Optional overlay for better text readability
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <h1 style={{ fontSize: "6vw", margin: "0 0 1vw 0", fontWeight: "700", color: "#D9CAA0" }}>
          We Bring the Breakfast to You!
        </h1>
        <p style={{ fontSize: "1.3vw", maxWidth: "60%", lineHeight: 1.4, color: "rgb(249, 245, 235)", fontWeight: "500" }}>
        Get fresh breakfast delivered with customizable catering packages. Choose from bagels, sandwiches, and more — perfect for meetings, events, or any group that loves a great start to the day. </p>
      </div>


      {/* <div style={{ width: "100%", textAlign: "center", marginBottom: "0.6vw" }}>
        <h1 style={{ fontSize: "2.8vw", margin: 0 }}>Perfect for any morning!</h1>
      </div> */}

      <div className="catering-icons-container">
        {iconData.map((item, idx) => (
          <div className="catering-icon-wrapper" key={idx}>
            <div className="catering-icon-circle">
              <img
                src={item.image}
                alt={`icon-${idx}`}
                className="catering-icon-image"
              />
            </div>
            <h2 className="catering-icon-description">{item.description}</h2>
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
      <div className="order-instructions-wrapper">
        <div className="order-instructions-inner">
          <h1 className="order-instructions-title">Ready to Order?</h1>

          {orderInstructions.map((item, index) => (
            <div className="order-step" key={index}>
              <div className="order-step-icon">
                <img
                  src={item.image}
                  alt={`step-${index}`}
                  className="order-step-image"
                />
              </div>
              <h2 className="order-step-title">{item.title}</h2>
              <p className="order-step-text">- {item.instruction}</p>
            </div>
          ))}
        </div>
      </div>


         
    </div>
      <Footer />
    </>

  );
};

export default Catering;
