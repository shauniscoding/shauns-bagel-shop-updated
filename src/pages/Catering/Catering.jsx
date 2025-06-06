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


      {/* <Footer /> */}
    </div>
  );
};

export default Catering;
