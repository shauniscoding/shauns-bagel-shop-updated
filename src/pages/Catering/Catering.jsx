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
import approved from "/images/approved.png";
import { useNavigate } from "react-router-dom";
import "./Catering.css";
import menu from "/images/menu.png";


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
      image: approved,
      description: "Customer Approved",
    },
  ];

const cateringPackages = [ 
  {
    title: "The Morning Mixer",
    description: "Perfect for: Small teams, casual brunches, morning meetups",
    price: "$89.99",
    image: morningMixer, 
    details: [
      "12 assorted fresh-baked bagels",
      "Choice of 3 cream cheeses: plain, veggie, cinnamon swirl",
      "Tray of 12 mini muffins",
      "Coffee traveler that serves 10",
      "Utensils, napkins, and cups included",
      "Serves: 8–10 people"
    ],
    isLeft: true,
  },

  {
    title: "The Breakfast Boss",
    description: "Perfect for: Offices, morning training sessions, events",
    price: "$149.99",
    image: breakfastBoss, 
    details: [
      "10 hot breakfast sandwiches with egg, cheese, and meat or veggie options",
      "Bagel platter with 8 assorted varieties",
      "Fresh fruit salad bowl",
      "Two coffee travelers or juice carafes",
      "Serves: 10–12 people"
    ],
    isLeft: false,
  },

  {
    title: "Donut Disturb",
    description: "Perfect for: Sweet tooths, celebratory mornings, dessert-first crews",
    price: "$99.99",
    image: donutDisturb, 
    details: [
      "18 assorted donuts and pastries",
      "6 large cinnamon rolls",
      "Tray of glazed donut holes",
      "1 gallon of cold brew coffee",
      "Serves: 10–14 people"
    ],
    isLeft: true,
  },

  {
    title: "Build-Your-Own Bagel Bar",
    description: "Perfect for: DIY lovers, client breakfasts, early morning parties",
    price: "$179.99",
    image: bagelBar, 
    details: [
      "18 bagel halves, sliced and ready to build",
      "Trio of cream cheese, butter, and jam",
      "Side of scrambled eggs, sausage, and bacon",
      "Fresh fruit tray for sharing",
      "Orange juice and bottled water included",
      "Serves: 12–15 people"
    ],
    isLeft: false,
  },

  {
    title: "Light Start",
    description: "Perfect for: Quick meetings, low-key mornings",
    price: "$59.99",
    image: lightStart, 
    details: [
      "12 mini bagels for easy sharing",
      "12 mixed fruit cups",
      "6 fresh-baked muffins",
      "1 liter of orange juice",
      "Serves: 6–8 people"
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

const cateringEvents = [
  {
    title: "Corporate Breakfasts",
    image: "https://static.thenounproject.com/png/3483587-200.png",
  },
  {
    title: "Birthday Parties",
    image: "https://www.freeiconspng.com/uploads/birthday-icon-9.png",
  },
  {
    title: "Weddings & Showers",
    image: "https://png.pngtree.com/png-vector/20221109/ourmid/pngtree-engangement-white-bridal-icon-vector-png-image_40963812.jpg",
  },
  {
    title: "School Events",
    image: "https://media.istockphoto.com/id/1043158368/vector/school-building-icon-in-flat-style-college-education-vector-illustration-on-white-isolated.jpg?s=612x612&w=0&k=20&c=qpk4m_v0vJvEJfFehgS8-A61xvHhFurjkmx2AteovV0=",
  },
  {
    title: "Family Gatherings",
    image: "https://www.freeiconspng.com/thumbs/family-icon/family-icon-14.jpg",
  },
  {
    title: "Brunches",
    image: "https://www.svgrepo.com/show/99050/breakfast.svg",
  },
  {
    title: "Team Meetings",
    image: "https://static.vecteezy.com/system/resources/thumbnails/000/550/535/small_2x/user_icon_007.jpg",
  },
  {
    title: "Holiday Parties",
    image: "https://media.istockphoto.com/id/1269160375/vector/beach-sunbed-vacation-icon-glyph-black-vector-on-isolated-white-background.jpg?s=612x612&w=0&k=20&c=UMyUzMj1p4QPaSShLhW3xQB16zQXpnWt0irRG8zt0Ps=",
  },
];

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
    <img src={menu} alt="Top Right Icon" className="fixed-icon" />
      
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

        <div style={{display: "flex", justifyContent: "flex-end"}}>
          <div className="package-container">
            <div>
              <img src={"https://abovecatering.com/wp-content/uploads/2020/07/Perk-Up-Your-Morning.jpg"} alt={"title"} className="package-image" style={{right:"-11vw"}}/>
            </div>

            <div className="package-info" style={{marginRight: "25vw",}} >
              <h1 className="package-title" style={{textAlign: "left"}}>
                {"We Cater for Any Occasion!"}
              </h1>
              
              <ul className="catering-event-list">
                {cateringEvents.map((event, index) => (
                  <li>
                    <img src={event.image} alt={event.title} />
                    <span>{event.title}</span>
                  </li>
                ))}
              </ul>

            </div>

          </div>
        </div>


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

          <p style={{ alignSelf: "center", marginTop: "2vw", maxWidth: "100%", fontSize: "1.2vw"}}> Looking for something different? We offer custom catering packages tailored to your event — just ask! </p>
        </div>
      </div>


         
    </div>
      <Footer />
    </>

  );
};

export default Catering;
