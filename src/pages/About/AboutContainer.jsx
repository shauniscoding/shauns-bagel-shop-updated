const AboutContainer = ({image, title, description, isLeft}) => {
    
    if(isLeft){
        return (    
        <div style={{ marginBottom: "3vw", paddingBottom: "4vw", paddingLeft: "2vw", paddingRight: "2vw", width: "85%", display: "flex", alignItems: "center"}}>   
            <img
            src={image}
            style={{
                width: "45%",
                height: "40vw",
                objectFit: "cover",
                borderRadius: "2vw",
            }}
            />

            <div style={{ height: "30vw", display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "1.4vw", width: "55%", backgroundColor: "#D9CAA0", paddingTop:"0px", borderTopRightRadius: "1.5vw", borderBottomRightRadius: "1.5vw"
}}>
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
        <div style={{ marginBottom: "3vw", paddingBottom: "4vw", paddingLeft: "2vw", paddingRight: "2vw", width: "85%", display: "flex",  alignItems: "center"}}>   
            
            <div style={{ height: "30vw", display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "1.4vw", width: "55%", backgroundColor: "#D9CAA0", paddingTop:"0px", alignSelf: "center", borderTopLeftRadius: "1.5vw", borderBottomLefttRadius: "1.5vw"}}>
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