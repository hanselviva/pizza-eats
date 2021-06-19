import React from "react";

const Confirmation = (props) => {
	const { order } = props;
	// const isTrue = (item) => item === true;

	return (
		<div className="confirmation-container">
			{order.map((order) => {
				return (
					<div key={order.id}>
						<h3> Yaaay! Your Pizza is on it's way!</h3>
						<h4> Order#: {order.id} </h4>
						<h4> Will be sent to: {order.name} </h4>
						<h4>Address: {order.address} </h4>
						{order.instructions && (
							<h4> Instructions: {order.instructions} </h4>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Confirmation;
