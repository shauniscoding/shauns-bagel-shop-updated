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
      
      <h1 style={{fontSize:"4.4vw", marginTop:"3vw"}}>About Us</h1>

      {/* <div style={{ paddingTop: "4vw", paddingBottom: "4vw", paddingLeft: "2vw", paddingRight: "2vw", width: "85%", display: "flex", backgroundColor: "#D9CAA0", alignItems: "center"}}>
        
        <img
          src={"https://cdnimg.webstaurantstore.com/uploads/blog/2019/5/interior-basics.jpg"}
          style={{
            width: "45%",
            height: "40vw",
            objectFit: "cover",
            borderRadius: "2vw",
          }}
        />

        <div style={{ height: "30vw", display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "1.4vw", width: "55%",  marginLeft: "1vw", backgroundColor: "#f9f5eb", paddingTop:"0px"}}>
          <h1 style={{width: "70%", fontSize: "3vw", marginBottom: "0px"}}>
            The Breakfast You Imagined.
          </h1>
          <p style={{ width: "80%", fontSize: "1.6vw"}}>
            Welcome to Shaun’s Bagel Shop — the world-renowned, multi-national breakfast empire that totally exists. You’ve probably heard of us in your dreams, because that’s where we started: in Shaun’s  imagination. But hey — just because it’s not real (yet) doesn’t mean it’s not made with love.
          </p>
        </div>

      </div> */}

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
        image={"https://cdn.vox-cdn.com/thumbor/wErcH2K1-mKOrfhP9yabCB6_3HE=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/69137692/acastro_210120_1777_bagel_0002.0.jpg"}
        title={"What Makes Us Special"}
        description={
          "At Shaun’s Bagel Shop, we’re not just serving breakfast — we’re crafting a morning ritual. Our (hypothetically award-winning) bagels are built on a foundation of warmth, nostalgia, and a sincere dedication to carbs. Each flavor is designed to capture the comfort of a weekend morning, whether you’re grabbing a bite on the go or pretending you're not late for work. \n\nWhat sets us apart? We blend traditional techniques with modern sensibilities, and if that sounds like something we read off a competitor’s website — well, great artists steal. But seriously, while our ovens might still be metaphorical, the passion behind every bagel is very real. We’re here to elevate your breakfast expectations — even if we do it all from the comfort of a dream. Because let’s be honest: who says a restaurant has to exist to be your favorite?"
        }
        isLeft={true}
      />
      
    </div>
  </>  
      );
}

export default About;