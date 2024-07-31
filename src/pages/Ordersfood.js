const Ordersfood = () => {
    return (
      <div>
        <div className="navbar">
          <div className="leftSide">
            <div
              className="button"
              style={{
                marginLeft: "500px",
                marginTop: "5px",
                fontSize: "20px",
                flexDirection: "column",
               marginBottom:'50px'
              }}
            >
              <a
                href="https://www.foodpanda.pk/contents/pandapay-user-account-terms-and-conditions"
                style={{
                  textDecoration: "none",
                  color: "#e21b70",
                  textAlign: "center",
                }}
              >
                pandapay Terms and Conditions
              </a>
  
              <a href="https://www.foodpanda.pk/contents/terms-and-conditions.htm"
                style={{
                  marginLeft: "100px",
                  marginTop: "10px",
                  color: "#e21b70",
                  fontSize: "20px",
                  textDecoration:'none'
                }}
              >
                
  Terms and Conditions
              </a>
              <a href="https://www.foodpanda.pk/contents/privacy.htm"
                style={{
                  marginLeft: "220px",
                  marginTop: "10px",
                  color: "#e21b70",
                  fontSize: "20px",
                  textDecoration:'none'
                }}
              >
                
  Privacy Policy
              </a>
            </div>
           
          </div>
        </div>
      </div>
    );
  };
  
  export default Ordersfood;
  