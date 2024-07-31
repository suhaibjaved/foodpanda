import logo from "../images/R .png";
import "../style/Navbar.css";
import "../style/ScalingButton.css";
import { useState } from "react";

// import Login from "../pages/Login";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
 const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className='navbar' style={{backgroundColor:'white',height:'60px',minHeight:'40px', width:"100%",   boxShadow:'0px 5px 20px rgba(1, 0, 0, 0.1)',}} >
      <div className="leftSide">
        <img src={logo} style={{marginTop:'20px'}}/>
      </div>
      <div className="style">
        <button
          onClick={toggleModal}
          className={`scaling-button ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          id="lodinBtn"
          style={{
            height: "40px",
            width: "90px",
            backgroundColor: "white",
            marginRight: "30px",
            marginTop: "20px",
            border: "1px solid",
            borderRadius: "8px",
            borderColor: "#e21b70",
            textDecoration: "non",
            marginBottom: "400px",
            cursor: "pointer",
            color: "#e21b70",
          }}
        >
          Log in
        </button>
        {modal && (
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              <h1>Welcome?</h1>
              <p>Sign in or login</p>
              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
              <button
                style={{
                  backgroundColor: "#1877f2",
                  borderColor: "#1877f2",
                  width: "400px",
                  height: "50px",
                  borderRadius: "6px",
                  marginBottom: "10px",
                  color: "white",
                }}
              >
                Continue with Facebook
              </button>
              <button
                style={{
                  backgroundColor: "white",
                  borderColor: "black",
                  width: "400px",
                  height: "50px",
                  borderRadius: "6px",
                  marginBottom: "10px",
                  color: "white",
                }}
              >
                Continue with Google
              </button>
              <button
                style={{
                  backgroundColor: "black",
                  borderColor: "black",
                  width: "400px",
                  height: "50px",
                  borderRadius: "6px",
                  color: "black",
                }}
              >
                Continue with Apple
              </button>
              <p
                style={{
                  marginLeft: "185px",
                  fontSize: "20px",
                  color: "black",
                }}
              >
                or
              </p>
              <button
                style={{
                  backgroundColor: "#e21b70",
                  borderColor: "#e21b70",
                  width: "400px",
                  height: "50px",
                  borderRadius: "20px",
                  color: "white",
                }}
              >
                Login
              </button>
              <button
                style={{
                  borderColor: "#e21b70",
                  width: "400px",
                  height: "50px",
                  borderRadius: "6px",
                  marginTop: "10px",
                  color: "#e21b70",
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
      <button
        onClick={toggleModal}
        className={`scaling-button ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        id="registerBtn"
        style={{
          height: "40px",
          width: "90px",
          backgroundColor: "#e21b70",
          marginRight: "60px",
          marginTop: "20px",
          border: "1px solid",
          borderRadius: "8px",
          borderColor: "#e21b70",
          textDecoration: "non",
          cursor: "pointer",
          marginBottom: "50px",
          color: "white",
          
        }}
      >
        Sign up
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h1>Welcome?</h1>
            <p>Sign in or login</p>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
            <button
              style={{
                backgroundColor: "#1877f2",
                borderColor: "#1877f2",
                width: "400px",
                height: "50px",
                borderRadius: "6px",
                marginBottom: "10px",
                color: "white",
                cursor: "pointer",
              }}
            >
              {" "}
              Continue with Facebook
            </button>
            <button
              style={{
                backgroundColor: "white",
                borderColor: "black",
                width: "400px",
                height: "50px",
                borderRadius: "6px",
                marginBottom: "10px",
                color: "black",
                cursor: "pointer",
              }}
            >
              {" "}
              Continue with Google
            </button>
            <button
              style={{
                backgroundColor: "black",
                borderColor: "black",
                width: "400px",
                height: "50px",
                borderRadius: "6px",
                color: "white",
                cursor: "pointer",
              }}
            >
              {" "}
              Continue with Apple
            </button>
            <p
              style={{ marginLeft: "185px", fontSize: "20px", color: "black" }}
            >
              or
            </p>
            <button
              style={{
                backgroundColor: "#e21b70",
                width: "400px",
                height: "50px",
                borderRadius: "6px",
                marginTop: "10px",
                color: "white",
                cursor: "pointer",
                borderColor: "#e21b70",
              }}
            >
              Login
            </button>
            <button
              style={{
                borderColor: "#e21b70",
                width: "400px",
                height: "50px",
                borderRadius: "6px",
                marginTop: "10px",
                color: "#e21b70",
                cursor: "pointer",
              }}
            >
              Sing up
            </button>
          </div>
        </div>
      )}

      <select
        name="lang"
        onChange="changeColor(this)"
        style={{
          borderColor: "#e21b70",
          width: "100px",
          marginRight: "300px",
          height: "40px",
          marginTop: "20px",
          textAlign: "center",
          borderRadius: "6px",
        }}
      >
        <option value="red">English</option>
      </select>
    </div>
  );
};



  

export default Navbar

