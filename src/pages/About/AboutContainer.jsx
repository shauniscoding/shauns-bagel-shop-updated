const AboutContainer = ({image, title, description, isLeft}) => {
    
    if(isLeft){
        return (    
        <div style={{ marginBottom: "200px", paddingTop: "4vw", paddingBottom: "4vw", paddingLeft: "2vw", paddingRight: "2vw", width: "85%", display: "flex", backgroundColor: "#D9CAA0", alignItems: "center"}}>   
            <img
            src={image}
            style={{
                width: "45%",
                height: "40vw",
                objectFit: "cover",
                borderRadius: "2vw",
            }}
            />

            <div style={{ height: "30vw", display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "1.4vw", width: "55%",  marginLeft: "1vw", backgroundColor: "#f9f5eb", paddingTop:"0px"}}>
            <h1 style={{width: "70%", fontSize: "3vw", marginBottom: "0px"}}>
                {title}
            </h1>
            <p style={{ width: "80%", fontSize: "1.6vw"}}>
                {description}
            </p>
            </div>

        </div>
        );
    }
    else{
        return (    
        <div style={{ marginBottom: "200px", paddingTop: "4vw", paddingBottom: "4vw", paddingLeft: "2vw", paddingRight: "2vw", width: "85%", display: "flex", backgroundColor: "#D9CAA0", alignItems: "center"}}>   
            
            <div style={{ height: "30vw", display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "1.4vw", width: "55%", marginRight: "1vw", backgroundColor: "#f9f5eb", paddingTop:"0px", alignSelf: "center"}}>
            <h1 style={{width: "70%", fontSize: "3vw", marginBottom: "0px", textAlign: "right" }}>
                {title}
            </h1>
            <p style={{ width: "80%", fontSize: "1.6vw", textAlign: "center", alignSelf: "center" }}>  
                {description}
            </p>
            </div>

            <img
            src={image}
            style={{
                width: "45%",
                height: "40vw",
                objectFit: "cover",
                borderRadius: "2vw",
            }}
            />

        </div>
        );
    }

}

export default AboutContainer;