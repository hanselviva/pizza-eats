import React, { useState } from "react";
import FoodPlace from "./FoodPlace";

const initialFoodPlaces = [
	{
		photo: "https://picsum.photos/200",
		name: "McDonald's",
		about: "Fast Food Burgers",
		time: "20-30 min",
		fee: "5.99",
	},
	{
		photo: "https://picsum.photos/200",
		name: "Sweetgreen",
		about: "Healthy Salads",
		time: "30-45 min",
		fee: "4.99",
	},
	{
		photo: "https://picsum.photos/200",
		name: "Subway",
		about: "American Sandwiches",
		time: "30-45 min",
		fee: "4.99",
	},
	{
		photo: "https://picsum.photos/200",
		name: "Starbucks",
		about: "Coffee and Tea",
		time: "10-20 min",
		fee: "3.99",
	},
];

const FoodPlaces = () => {
	const [foodPlaces, setFoodPlaces] = useState(initialFoodPlaces);

	return (
		<div>
			{/* Just Doubling the initialFoodPlaces we have coz too lazy to make 8 instead of 4 */}
			<FoodPlace key={foodPlaces.fee} foodPlaces={foodPlaces} />{" "}
			<FoodPlace key={foodPlaces.fee} foodPlaces={foodPlaces} />
		</div>
	);
};

export default FoodPlaces;
