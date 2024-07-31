//component
import Navbar from "./component/Navbar";
//pages
import Home from "./pages/Home";
import YouPrepareFood from "./pages/YouPrepareFood";
import FindTheseCities from "./pages/FindTheseCities";
import PutPocket from "./pages/PutPocket";
import TakeYourOffice from "./pages/TakeYourOffice";

 import OrderFood from "./pages/OrderFood";
import Ordersfood from "./pages/Ordersfood";
import Order1 from "./pages/Order1";
import Order2 from "./pages/Order2";
import Order3 from "./pages/Order3";
import Order4 from "./pages/Order4";
import Footer from "./pages/Footer";
//import ScalingButton from "./pages/ScalingButton";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <YouPrepareFood />

      <FindTheseCities />
      <PutPocket />

      <TakeYourOffice />
   <OrderFood/> 
<Ordersfood/>
<Order1/>
<Order2/>
<Order3/>
<Order4/>
<Footer/>
      {/* <div className="page"> */}

      {/* </div> */}
    </div>
  );
}

export default App;
