import i from "../images/instagram.png";

import f from "../images/174848.png";
import logo from "../images/R .png";
import delivery from "../images/delivery.png";
const Footer = () => {
  return (
    <div>
      <img
        src={logo}
        style={{
          width: "150px",
          height: "140px",
          marginLeft: "70px",
          marginBottom: "4040px",
        }}
      />
      <img
        src={delivery}
        style={{
          width: "180px",
          height: "170px",
          marginLeft: "70px",
          marginBottom: "4020px",
        }}
      />
     <a href="https://www.instagram.com/foodpanda_pakistan/">
        <img
          src={i}
          style={{
            width: "50px",
            height: "40px",
            marginBottom: "4090px",
            marginLeft: "900px",
          }}
        />
      </a>
    
      <a href="https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2Ffoodpanda.pk%2F">
        <img
          src={f}
          style={{
            width: "45px",
            height: "40px",
            marginBottom: "4090px",
            marginLeft: "40px",
            borderColor: "black",
            
          }}
        />
      </a>
    </div>
  );
};

export default Footer;
