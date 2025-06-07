import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import AboutContainer from "./AboutContainer";

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

      
      <h1 style={{fontSize:"4.4vw", marginTop:"3vw"}}>About Us</h1>

      <AboutContainer 
        image={"https://cdnimg.webstaurantstore.com/uploads/blog/2019/5/interior-basics.jpg"}
        title={"The Breakfast You Imagined."}
        description={"Welcome to Shaun’s Bagel Shop — the world-renowned, multi-national breakfast empire that totally exists. You’ve probably heard of us in your dreams, because that’s where we started: in Shaun’s  imagination. But hey — just because it’s not real (yet) doesn’t mean it’s not made with love."}
        isLeft={true}
      />

      <AboutContainer 
        image={"https://fruitbasket.limepack.com/blog/wp-content/uploads/2024/01/Coffee-Interior.jpg"}
        title={"Our Story"}
        description={"Shaun’s Bagel Shop was founded on a simple belief: breakfast should never be boring. Also, donuts are the highest form of art, and bagels are proof that circles can bring happiness. The story began in a tiny apartment kitchen with one toaster, a dozen bagels, and a dangerous amount of enthusiasm for cream cheese. There were no investors, no franchise dreams — just Shaun, a spatula, and a lifelong passion for perfectly golden carbs."}
        isLeft={false}
      />

      <AboutContainer 
        image={"https://cdnimg.webstaurantstore.com/uploads/blog/2019/5/industrial.jpg"}
        title={"What Makes Us Special"}
        description={
        "At Shaun’s Bagel Shop, we believe breakfast should be warm, welcoming, and a little nostalgic. Our bagels are crafted with care, inspired by the kind of cozy neighborhood spot we’ve always imagined — where the coffee’s strong, the carbs are golden, and everyone feels at home. While we don’t have a storefront just yet, every detail is built with genuine passion and a love for the little things that make mornings better."}
        isLeft={true}
      />
      
      <div style={{ 
        marginBottom: "200px", 
        padding: "4vw 2vw", 
        width: "85%", 
        backgroundColor: "#D9CAA0", 
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h1 style={{ fontSize: "3vw", textAlign: "center", marginBottom: "2vw" , marginTop: "0px"}}>
          What People Are Saying.
        </h1>

        <div style={{ 
          display: "flex", 
          flexDirection: "row", 
          alignItems: "stretch", 
          gap: "2vw", 
          width: "100%",
          alignItems: "center",
        }}>
          <img 
            src="https://cdnimg.webstaurantstore.com/uploads/blog/2019/5/interior-basics.jpg" 
            alt="Shop Interior"
            style={{ 
              width: "45%", 
              height: "50vw", 
              objectFit: "cover", 
              borderRadius: "1.5vw" 
            }}
          />

          <div style={{ 
            width: "55%", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "space-between",
            height: "40vw"
          }}>
            {/* Quote 1 - Left Aligned */}
            <div style={{ 
              backgroundColor: "#f9f5eb", 
              borderRadius: "1.5vw", 
              padding: "2vw", 
              fontSize: "1.6vw", 
              textAlign: "left",
              width: "70%"
            }}>
              <blockquote style={{ fontStyle: "italic", margin: 0 }}>
                “Every bite was like a warm hug from someone I owe money to. Strange, but comforting.”
              </blockquote>
              <div style={{ marginTop: "0.8vw", textAlign: "right", fontWeight: "bold" }}>
                – S’Han Thompkins
              </div>
            </div>

            {/* Quote 2 - Right Aligned */}
            <div style={{ 
              backgroundColor: "#f9f5eb", 
              borderRadius: "1.5vw", 
              padding: "2vw", 
              fontSize: "1.6vw", 
              textAlign: "right",
              alignSelf: "flex-end",
              width: "70%"

            }}>
              <blockquote style={{ fontStyle: "italic", margin: 0 }}>
                “I showed up to Shaun’s Bagel Shop. There was no building. Just vibes. Still five stars.”
              </blockquote>
              <div style={{ marginTop: "0.8vw", textAlign: "right", fontWeight: "bold" }}>
                – Shéaun Thomasi
              </div>
            </div>

            {/* Quote 3 - Left Aligned */}
            <div style={{ 
              backgroundColor: "#f9f5eb", 
              borderRadius: "1.5vw", 
              padding: "2vw", 
              fontSize: "1.6vw", 
              textAlign: "left",
              width: "70%"
            }}>
              <blockquote style={{ fontStyle: "italic", margin: 0 }}>
                “I tried to recreate the bagel at home. I failed. Twice. I respect the art now.”
              </blockquote>
              <div style={{ marginTop: "0.8vw", textAlign: "right", fontWeight: "bold" }}>
                – Shaúhn Thomassen
              </div>
            </div>
          </div>
        </div>
      </div>




    </div>
    <Footer />
  </>  
      );
}

export default About;