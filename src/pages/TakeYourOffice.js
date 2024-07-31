import logo from "../putpocket/home-corporate-pk.webp";
import "../style/TakeYourOffice.css";
import { useState } from "react";
const TakeYourOffice = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div className="office">
      <div className="leftside">
        <h1>Take your office out to lunch</h1>
      </div>
      <img src={logo} style={{ width: "1800px", height: "500px",backgroundPosition:'center',backgroundSize:'cover',objectFit:'cover'}} />
      <div
        className="modal-content"
        style={{
          marginTop: "3300px",
          backgroundColor: "white",
          borderRadius: "15px",
          marginRight: "250px",
          width: "900px",
          height: "250px",
          marginBottom: "100px",
          borderBottomColor: "red",
          boxShadow: "0px 5px 20px rgba(1, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ marginLeft: "20px" }}>foodpanda for business</h1>
        <p style={{ color: "black", marginLeft: "20px" }}>
          Order lunch or fuel for work-from-home, late nights in the office,
          corporate events, client meetings, and much more.
        </p>
        <button
          className={`scaling-button ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          style={{
            backgroundColor: "#e21b70",
            cursor: "pointer",
            width: "120px",
            height: "50px",
            borderRadius: "6px",
            marginTop: "60px",
            color: "white",
            borderColor: "#e21b70",
            marginLeft: "20px",
          }}
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default TakeYourOffice;
