import React from "react";
import Card from "./Card";
import '../../styles/home.css';
import ReactDOM from "react-dom";
import  PropTypes  from "prop-types";

//create your first component
function Home (props){

	return (
		<div className="text-center main-container">
		<div className="counter-container">
		<Card classType= 'clock-card' content= '⏳'/>
        <Card classType= 'card' content={props.DigitSix % 10}/>
		<Card classType= 'card' content={props.DigitFive % 10}/>
		<Card classType= 'card' content={props.DigitFour % 10} />
		<Card classType= 'card' content = {props.DigitThree % 10}/>
		<Card classType= 'card' content={props.DigitTwo % 10}/>
		<Card classType= 'card' content={props.DigitOne % 10}/>
		</div>
		</div>
	);
};


//PropTypes
Home.propTypes= {
	classType : PropTypes.string,
    content : PropTypes.number,
};



//Function.
let counter = 0;
setInterval(function () {
  const six = Math.floor(counter / 100000);
  const five = Math.floor(counter / 10000);
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);
  counter++;

  ReactDOM.render(
    <Home
      DigitOne={one}
      DigitTwo={two}
      DigitThree={three}
      DigitFour={four}
      DigitFive={five}
      DigitSix={six}
    />,
    document.querySelector("#app")
  );
}, 1000);




//Exporting home
export default Home;
