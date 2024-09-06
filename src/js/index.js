//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Counter from "./component/counter.jsx";


//Creo una funcion para renderizar los segundos en pantalla

let segundos=0
setInterval(()=>{
    const one=Math.floor((segundos/1)%10)
    const two=Math.floor((segundos/10)%10)
    const three=Math.floor((segundos/100)%10)
    const four=Math.floor((segundos/1000)%10)
    const five=Math.floor((segundos/10000)%10)
    const six=Math.floor((segundos/100000)%10)

    segundos++
    ReactDOM.createRoot(document.getElementById('app')).render(<Counter 
        digitOne={one} 
        digitTwo={two} 
        digitThree={three}
        digitFour={four}
        digitFive={five}
        digitSix={six}
        />);
},1000)

//render your react application