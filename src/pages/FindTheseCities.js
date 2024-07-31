// src/ImageOppositeComponent.js
import { useState } from "react";
import "../style/FindTheseCities.css";
import logo from "../cities/Islamabad.jpg";
import R from "../cities/karachi.webp";
import L from "../cities/Lahore.webp";
import F from "../cities/Faisalabad.webp";
import A from "../cities/Abottabad.webp";
import B from "../cities/Bahawalpur.webp";
import g from '../cities/Gujranwala.webp';
import h from '../cities/Hyderabad.webp';
import gu from '../cities/city-tile-Gujrat.jpg.webp'
const FindTheseCities = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="image-container">
      <h1 style={{ marginTop: "200px", marginLeft: "200px" }}>
        Find us in these cities and many more!
      </h1>

      <img
        src={logo}
        alt="Example"
        style={{
          marginLeft: "200px",
          width: "400px",
          height: "300px",
          borderRadius: "25px",
          marginTop: "10px",
        }}
      />

      <img
        src={R}
        style={{
          marginLeft:'30px',
          width: "400px",
          height: "300px",
          borderRadius: "25px",
          marginTop: "10px",
        }}
      />

      <img
        src={L}
        alt="Example"
        style={{
          marginLeft: "30px",
          width: "400px",
          height: "300px",
          borderRadius: "25px",
          marginTop: "30px",
        }}
      />

      <div className="text-overlay">
        <button
          className={`scaling-button ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          style={{
            color: "black",
            width: "150px",
            height: "50px",
          
            marginLeft: "250px",
            borderRadius: "15px",
            marginBottom: "900px",
            alignItems: "flex-end",
          }}
        >
          Islamabad
        </button>

        <button
          className={`scaling-button ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          style={{
            color: "black",
            width: "150px",

            height: "50px",
            marginLeft: "400px",
            borderRadius: "15px",
          }}
        >
          karachi
        </button>
      </div>
      <div className="youfindcities">
        <img
          src={F}
          style={{
            width: "400px",
            height: "300px",
            borderRadius: "25px",
            marginLeft: "200px",
            marginTop: "20px",
          }}
        />
        <img
          src={A}
          style={{
            width: "400px",
            height: "300px",
            borderRadius: "25px",
            marginLeft: "30px",
          }}
        />
        <img
          src={B}
          style={{
            width: "400px",
            height: "300px",
            borderRadius: "25px",
            marginLeft: "30px",
          }}
        />
        <div className="text-overlay">
          <button
            className={`scaling-button ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            style={{
              marginLeft: "250px",

              color: "black",
              width: "150px",
              height: "50px",
              borderRadius: "15px",
            }}
          >
            Faisalabad
          </button>
          <button
            className={`scaling-button ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            style={{
              marginBottom: "260px",
              marginTop: "30px",
              color: "black",
              width: "150px",
              height: "50px",
              borderRadius: "15px",
              cursor: "pointer",
              marginLeft:'420px'
            }}
          >
            Abottabad
          </button>
        </div>
        <div className="wahcant">
      
        <img
          src={g}
          style={{
            width: "400px",
            height: "300px",
            borderRadius: "25px",
            marginLeft: "200px",
            marginTop: "20px",
          }}
        />
        <img
          src={h}
          style={{
            width: "400px",
            height: "300px",
            borderRadius: "25px",
            marginLeft: "30px",
          }}
        />
        <img
          src={gu}
          style={{
            width: "400px",
            height: "300px",
            borderRadius: "25px",
            marginLeft: "30px",
          }}
        />
        </div>
        
      </div>
    </div>
  );
};

export default FindTheseCities;
