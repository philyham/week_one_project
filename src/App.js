import "./App.css";
import "./index.css"
import Sedan_Icon from "./images/icon-sedans.svg"
import Suvs_Icon from "./images/icon-suvs.svg"
import Luxury_Icon from "./images/icon-luxury.svg"

function App() {
  return (
    <div className="App">
     <div className="wrapper">
     <div className="sedans">
       <img src={Sedan_Icon} alt="sedan icon" />
       <h2>SEDANS</h2>
       <p>
        Choose a sedan for its affordability and excellent fuel economy. 
        Ideal for cruising in the city and or on your next road trip.
       </p>
       <button type="button" className="sedan-button">Learn More</button>
     </div>

     <div className="suvs">
       <img src={Suvs_Icon} alt="suvs icon" />
       <h2>SUVS</h2>
       <p>
        Take an SUV for its spacious interior, power and versability.
        Perfect for your next family vacation and off-road adventures.
       </p>
       <button type="button" className="suvs-button">Learn More</button>
     </div>

     <div className="luxury">
       <img src={Luxury_Icon} alt="luxury icon" />
       <h2>LUXURY</h2>
       <p>
        Cruise in the best car brands without the bloated prices. 
        Enjoy the enhanced comfort of a luxury rental and arrive in style.
       </p>
       <button type="button" className="luxury-button">Learn More</button>
     </div>
    </div>
    </div>
  );
}

export default App;
