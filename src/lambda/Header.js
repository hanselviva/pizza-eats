import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav>
				<h1> LAMBDA EATS</h1>
				<div>
					<Link to="/">Home</Link>
					<Link to="/help">Help</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
