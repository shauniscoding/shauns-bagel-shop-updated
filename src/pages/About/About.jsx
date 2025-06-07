import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

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

      <div style={{ paddingTop: "4vw", paddingBottom: "4vw", paddingLeft: "2vw", paddingRight: "2vw", width: "85%", display: "flex", backgroundColor: "#D9CAA0", alignItems: "center"}}>
        
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

      </div>
      
    </div>
  </>  
      );
}

export default About;