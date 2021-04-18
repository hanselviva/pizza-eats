import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
	return (
		<div className="cta-container">
			<p>Your favorite food, delivered while coding.</p>
			<Link to="/pizza">
				<button> Pizza? </button>
			</Link>
		</div>
	);
};

export default CallToAction;
