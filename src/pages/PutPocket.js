import "../style/putpocket.css";
import logo from "../putpocket/foodpanda mobile.webp";
import r from '../putpocket/pkhomepageqrcode (1).png'
import p from '../putpocket/apples.png'
import a from '../putpocket/playstore.png'
import g from '../putpocket/gallery.png'
const PutPocket = () => {
  return (
    <div>
      <h1 style={{ marginLeft: "50px", marginTop: "50px" }}>
        Put us in your pocket
      </h1>

      <div className="putpocket">
        <h1
          style={{
            color: "white",
            marginLeft: "40px",
            fontSize: "25px",
            marginTop: "60px",
            position:'absolute'
          }}
        >
          Download the food and groceries you love
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "white",
            marginTop: "130px",
            marginLeft: "160px",
            position: "absolute",
            flexDirection: "row",
          }}
        >
          {" "}
          Its all at your fingertips the restaurants and shops you love. 
        </p>

        <p
          style={{
            color: "white",
            marginLeft: "160px",
            position: "absolute",
            marginTop: "170px",
          }}
        >
          Find the right food and groceries to suit your mood and make the first
          bite last.{" "}
        </p>
        <p
          style={{
            color: "white",
            marginLeft: "160px",
            position: "absolute",
           marginTop:'200px'
          }}
        >
          Find the right food and groceries to suit your mood and make the first
          bite last.{" "}
        </p>
       
      
    <img src={r} style={{height:'100px',width:'120px',marginLeft:'30px',marginTop:'130px',borderColor:'#E3E6E8'}}/>

        <img
          src={logo}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            marginTop: "2620px",
            marginRight: "200px",
            height: "530px",
            width: "600px",
          }}
        />
<div style={{marginBottom:'50px'}}>
        <button
          style={{
            height: "50px",
            width: "180px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
            fontSize: "23px",
          marginLeft:'30px',
            marginTop: "50px",
            cursor: "pointer",
            position: "absolute",
          }}
        >
         <img src={p} style={{width:'50px',height:'40px'}}/>   App Store
        </button>
        </div>
    
        <button
          style={{
            height: "50px",
            width: "180px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
            fontSize: "20px",
            marginLeft: "230px",
         borderColor:"white",
            cursor: "pointer",
              textAlign:'top'
          }}
        >
          <img src={a} style={{width:'50px',height:'40px'}}/>Google Play
                            </button>
        
 
        <button
          href="https://appgallery.huawei.com/#/app/C101812091"
          style={{
            height: "50px",
            width: "200px",
            backgroundColor: "black",
            borderColor:"white",
            color: "white",
            borderRadius: "10px",
            fontSize: "23px",
   marginLeft:'20px',
            marginBottom: "500px",
            cursor: "pointer",
            textDecoration: "none",
            position: "absolute",
          }}
        >
         <img src={g} style={{width:'50px',height:'40px',marginRight:'15px'}}/> App gallery
        </button>
        
      </div>
      
    </div>
  );
};

export default PutPocket;
