import React from "react";
import CallToAction from "./CallToAction";
import FoodPlaces from "./FoodPlaces";

// Had to make Home a component so I can wrap these in Switch Route "/"
const Home = () => {
	return (
		<div>
			<CallToAction />
			<FoodPlaces />
		</div>
	);
};

export default Home;
