import "../style/YouPrepareFood.css";
import { useState } from "react";
import logo from "../r.image/s.webp";
const YouPrepareFood = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div className="image">
      <div className="leftside">
        <h1>You prepare the food, we handle the rest</h1>
      </div>
      <img src={logo} style={{ width: "1800px", height: "500px" }} />
      <div
        className="modal-content"
        style={{
          marginTop: "900px",
          backgroundColor: "white",
          borderRadius: "15px",
          marginRight: "250px",
          width: "1600px",
          height: "320px",
           boxShadow:'0px 5px 20px rgba(1, 0, 0, 0.1)',
        }}
      >
        <h1>List your restaurant or shop on foodpanda</h1>
        <p style={{ color: "black" }}>
          Would you like millions of new customers to enjoy your amazing food
          and groceries So would we Its simple we list your menu and product
          lists online, help you process orders pick them up and deliver them to
          hungry pandas – in a heartbeat! Interested Lets start our partnership
          today!
        </p>
        <button
          className={`scaling-button ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          style={{
            backgroundColor: "#e21b70",
            width: "120px",
            height: "50px",
            borderRadius: "6px",
        bottom: "10px",
            color: "white",
            borderColor: "#e21b70",
            cursor: "context-menu",
          }}
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default YouPrepareFood;
