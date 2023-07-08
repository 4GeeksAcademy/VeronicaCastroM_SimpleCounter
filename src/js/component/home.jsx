import React from "react";
import Card from "./Card";
import '../../styles/home.css'


//create your first component
const Home = () => {
	return (
		<div className="text-center main-container">
		<div className="counter-container">
		<Card classType= 'clock-card' content= '⏳'/>
        <Card classType= 'card'/>
		<Card classType= 'card'/>
		<Card classType= 'card'/>
		<Card classType= 'card'/>
		<Card classType= 'card'/>
		<Card classType= 'card'/>
		</div>
		</div>
	);
};

export default Home;
