import React from "react";

const Confirmation = (props) => {
	const { order } = props;
	// const isTrue = (item) => item === true;

	return (
		<div className="confirmation-container">
			{order.map((order) => {
				return (
					<div>
						<h3> Yaay! Thank you, {order.name}. Your Pizza is on it's way!</h3>
						<h4> Order#: {order.id} </h4>
						<h4>Address: {order.address} </h4>
					</div>
				);
			})}
		</div>
	);
};

export default Confirmation;
