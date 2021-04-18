import React from "react";
import { Link } from "react-router-dom";

const FoodPlace = ({ foodPlaces }) => {
	return (
		<div className="food-places-container">
			{foodPlaces.map((item, i) => {
				return (
					<div className="food-place" key={i}>
						<Link to="/">
							<p>
								<b>{item.name}</b>
							</p>
						</Link>
						<p>{item.about}</p>
						<p>{item.time}</p>
						<p>{item.fee}</p>
					</div>
				);
			})}
		</div>
	);
};

export default FoodPlace;
