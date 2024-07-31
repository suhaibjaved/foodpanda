import "../style/Home.css";
import { useState } from "react";
import logo from "../essets/J.webp";
const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div className="container">
      <div className="leftside">
        <h1
          style={{
            position: "absolute",
            marginTop: "300px",
            marginLeft: "100px",
          }}
        >
          Its the food and groceries you love delivered
        </h1>
      </div>

      <div
        className="style"
        style={{
          position: "absolute",
          marginTop: "400px",
          backgroundColor: "white",
          height: "90px",
         borderRadius:'20px',
         maxHeight:'130px',
         width:'780px',
marginLeft:'60px',
boxShadow:'0px 5px 20px rgba(0, 0, 0, 0.1)',
          
        }}
      >
        <form className="d-flex" role="search">
        
          <input
          
            className="form-control me-2 border border-black "
            type="search"
            placeholder="Your street and street number"
           
            style={{
              height: "60px",
              width: "600px",
              textWrap: "inherit",
              backgroundColor: "white",
              marginLeft: "30px",
              borderRadius: "3px",
              textAlign: "center",
              textJustify: "auto",
              marginTop:'16px',
         
            }}
       
          />
           
          <button
            className={`scaling-button ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            style={{
              height: "60px",
              width: "110px",
              color: "white",
              backgroundColor: "#ff2b85 ",
              marginLeft: "25px",
              borderRadius: "8px",
              borderColor: "#ff2b85",
            }}
          >
            Food Find
          </button>
          
        </form>
      </div>

      <div className="rightSide">
        <img src={logo} />
      </div>
    </div>
  );
};

export default Home;
