import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import AboutContainer from "./AboutContainer";
import menu from "/images/menu.png";

const About = () => {
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
          backgroundImage: 'url("https://cdn.homedit.com/wp-content/uploads/2019/05/A-Modern-Colombian-Coffee-Shop-2-1024x667.jpg")',
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
          It starts with breakfast.
        </h1>
        <p style={{ fontSize: "1.3vw", maxWidth: "60%", lineHeight: 1.4, color: "rgb(249, 245, 235)", fontWeight: "500" }}>
At Shaun’s Bagel Shop, we start your day with a smile and fresh breakfast favorites. From warm bagels to savory sandwiches, every bite is made to brighten your morning and fuel your day.        </p>
      </div>

      
      <h1 style={{fontSize:"4.4vw", marginTop:"3vw", marginBottom: "4vw"}}>About Us</h1>

      <AboutContainer 
        image={"https://cdnimg.webstaurantstore.com/uploads/blog/2019/5/interior-basics.jpg"}
        title={"The Breakfast You Imagined."}
        description={"Welcome to Shaun’s Bagel Shop — the world-renowned, multi-national breakfast empire that totally exists. You’ve probably heard of us in your dreams, because that’s where we started: in Shaun’s  imagination. But hey — just because it’s not real (yet) doesn’t mean it’s not made with love."}
        isLeft={true}
      />

      <AboutContainer 
        image={"https://fruitbasket.limepack.com/blog/wp-content/uploads/2024/01/Coffee-Interior.jpg"}
        title={"Our Story"}
        description={"Shaun’s Bagel Shop started with one toaster, a dozen bagels, and a big love for breakfast. There were no investors, no big plans — just Shaun, a spatula, and a deep passion for golden carbs. We believe breakfast should never be boring, and that bagels and donuts prove one thing: circles make people happy."}
        isLeft={false}
      />

      <AboutContainer 
        image={"https://cdnimg.webstaurantstore.com/uploads/blog/2019/5/industrial.jpg"}
        title={"What Makes Us Special"}
        description={
        "At Shaun’s Bagel Shop, we believe breakfast should be warm, nostalgic, and full of care. Our bagels are made with passion and inspired by the cozy neighborhood spot we dream of — where the coffee’s strong, the carbs are golden, and everyone feels at home."}
        isLeft={true}
      />
      
      <div style={{ 
          display: "flex", 
          flexDirection: "row", 
          alignItems: "center", 
          width: "85%",
          marginBottom: "6vw",
        }}>
          {/* Quotes - Now on the Left */}
        <div style={{ 
          width: "100%", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center",
          backgroundColor: "#D9CAA0", 
          padding: "2vw", 
          boxSizing: "border-box", 
          height: "34vw",
          borderTopLeftRadius: "1.5vw", borderBottomLeftRadius: "1.5vw"

        }}>
          <h1 style={{ 
            width: "100%", 
            fontSize: "2.6vw", 
            marginBottom: "1.5vw", 
            textAlign: "center" 
          }}>
            What People Are Saying
          </h1>

          {/* Quote 1 - Left Aligned */}
          <div style={{ 
            width: "60%", 
            alignSelf: "flex-start", 
            // backgroundColor: "white", 
            borderRadius: "1vw", 
            fontSize: "1.6vw", 
            textAlign: "left",
            margin: 0,
            marginLeft: "1.5vw"
          }}>
            <blockquote style={{ fontStyle: "italic", margin: 0 }}>
              “Every bite was like a warm hug from someone I owe money to. Strange, but comforting.”
            </blockquote>
            <div style={{ marginTop: "0.6vw", textAlign: "right", fontWeight: "bold" }}>
              – S’Han Thompkins
            </div>
          </div>

          {/* Quote 2 - Right Aligned */}
          <div style={{ 
            width: "60%", 
            alignSelf: "flex-end", 
            // backgroundColor: "white", 
            borderRadius: "1vw", 
            fontSize: "1.6vw", 
            textAlign: "right",
            marginTop: "2vw", 
          }}>
            <blockquote style={{ fontStyle: "italic", margin: 0 }}>
              “I showed up to Shaun’s Bagel Shop. There was no building. Just vibes. Still five stars.”
            </blockquote>
            <div style={{ marginTop: "0.6vw", fontWeight: "bold" }}>
              – Shéaun Thomasi
            </div>
          </div>

          {/* Quote 3 - Left Aligned */}
          <div style={{ 
            width: "60%", 
            alignSelf: "flex-start", 
            // backgroundColor: "white", 
            borderRadius: "1vw", 
            fontSize: "1.6vw", 
            textAlign: "left",
            marginBottom: "1vw" ,
            marginLeft: "1.5vw"
          }}>
            <blockquote style={{ fontStyle: "italic", margin: 0 }}>
              “I tried to recreate the bagel at home. I failed. Twice. I respect the art now.”
            </blockquote>
            <div style={{ marginTop: "0.6vw", textAlign: "right", fontWeight: "bold" }}>
              – Shaúhn Thomassen
            </div>
          </div>
        </div>





          {/* Image - Now on the Right */}
          <img 
            src="https://cdnimg.webstaurantstore.com/uploads/blog/2019/5/interior-basics.jpg" 
            alt="Shop Interior"
            style={{ 
              width: "45%", 
              height: "40vw", 
              objectFit: "cover", 
              borderRadius: "1.5vw" 
            }}
          />
        </div>





    </div>
    <Footer />
  </>  
      );
}

export default About;