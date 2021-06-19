import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
	return (
		<div className="cta-container">
			<div>
				<p>Your favorite food, delivered while coding.</p>
				<Link to="/pizza">
					<button> Make your own pizza </button>
				</Link>
			</div>
		</div>
	);
};

export default CallToAction;
