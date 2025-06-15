import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import scollIndicator from "./assets/scroll.gif";
import FeaturedItem from "./FeaturedItem";
import Promotion from "./Promotion";
import donuts from "/images/recommended_donuts.png";
import toast from "/images/recommended_toast.png";
import panacke_promotion from "/images/pancake_promotion.jpg";
import brunch_promotion from "/images/brunch_promotion.jpg";
import donut_promotion from "/images/donut_promotion.jpg";
import menu from "/images/menu.png";

const Home = () => {
  return (
    <div className="background">
      <img src={menu} alt="Top Right Icon" className="fixed-icon" />
      <Navbar />
      
      {/* Main Content */}
      <main className="home-main" style={{ position: "relative" }}>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="home-video"
          src="https://videocdn.cdnpk.net/videos/21b79c05-e523-4c7d-b389-56235e18b2db/horizontal/previews/videvo_watermarked/large.mp4"
          type="video/mp4"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      <div
        className="overlay-dark"
      />
    </div>


    <div
      className="splash-text-container"
    >
      <h1>
        Shaun's Bagel Shop
      </h1>
      <p>
        Fresh mornings start here
      </p>
    </div>




  <img
    src={scollIndicator}
    alt="Scroll Down"
    className="scroll-indicator"
  />
</main>


      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", marginBottom: "0vw" }}>
          <h1
            style={{ fontSize: "7vw",  textAlign: "center", marginBottom: "0vw" }}
          >
            Featured
          </h1>
        </div>

        <FeaturedItem
          title="Mocha Fudge Donuts"
          description="Indulge in the rich, velvety bliss of our Midnight Mocha Rings — fresh-baked chocolate donuts dipped in smooth dark glaze, with just a hint of espresso. Perfectly soft, lightly crisp, and dangerously delicious. Pair one with your morning coffee, or grab a dozen and make breakfast the best part of your day."
          image={donuts}
          isLeft={true}
        />

        <FeaturedItem
          title="Sun-Kissed Tomato Toast"
          description="Crisp artisan sourdough topped with juicy, vine-ripened tomatoes, a drizzle of olive oil, and a sprinkle of sea salt and fresh herbs. Finished with whipped feta or a hint of balsamic glaze (your call). It's the kind of toast that makes your morning feel like a brunch in the Mediterranean."
          image={toast}
          isLeft={false}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", marginBottom: "0vw" }}>
          <h1
            style={{ fontSize: "7vw",  textAlign: "center", marginBottom: "4vw" }}
          >
            Promotions
          </h1>
        </div>

        <div style={{ width: "85%" , display: "flex", flexDirection: "column"}}>

         <div style={{ 
            width: "100%", 
            display: "flex", 
            justifyContent: "flex-end" 
          }}>
            <Promotion
              title="Introducing the Wake Up Happy Combo!"
              description="Start your morning right with our hearty breakfast special. Treat yourself to two fluffy, golden-brown pancakes, two farm-fresh eggs cooked just the way you like, a side of crispy, savory bacon, and a freshly brewed hot coffee — all for just $6.99. Available weekdays from 7:00 AM to 11:00 AM. Dine in or take it to go — the choice is yours. Delicious mornings start here."
              isLeft={true}
              image={panacke_promotion}
            />
          </div>

          <div style={{ 
            width: "100%", 
            display: "flex", 
            justifyContent: "flex-start",
          }}>

            <Promotion
              title="Weekend Brunch Bash"
              description=" Make your weekend mornings unforgettable! Bring a friend and savor our Buy One, Get One 50% Off deal on any delicious brunch entrée — from golden Belgian waffles and savory breakfast burritos to fresh avocado toast and hearty omelets. Whether you're in the mood for something sweet, savory, or a bit of both, we've got something to satisfy every craving. Join us every Saturday and Sunday from 8 AM to 1 PM — the perfect way to start your weekend right."
              isLeft={false}
              image={brunch_promotion}
              />

          </div>

          <div style={{ 
            width: "100%", 
            display: "flex", 
            justifyContent: "flex-end",
          }}>

            <Promotion
              title="Donut Dozen Deal"
              description="Whether you’re fueling up for a big day or treating the whole office, this offer is too good to miss.
              For just $9.99, enjoy a dozen handcrafted donuts made fresh daily with care and quality ingredients. Choose your favorites or mix and match from our mouthwatering lineup — from classic glazed and rich chocolate frosted to fruity jelly-filled and fun seasonal flavors. Available every day, while supplies last. Stop by and treat yourself or share the joy with others!
              "
              isLeft={true}
              image={donut_promotion}
              />

          </div>

        </div>


      </div>
      <Footer />
    </div>
  );
};

export default Home;
