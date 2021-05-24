import React from "react";
import { useHistory } from "react-router-dom";

const sizes = ["Small", "Medium", "Large", "Extra Large"];
const toppings = [
	"Pepperoni",
	"Sausage",
	"Canadian Bacon",
	"Spicy Italian Sausage",
	"Grilled Chicken",
	"Onions",
	"Green Pepper",
	"Diced Tomatoes",
];
const sauces = ["Original Red", "Garlic Ranch", "BBQ Sauce", "Spinach Alfredo"];

// Add to Order Div at the Bottom of Pizza Form
const AddToOrder = ({
	submitDisabled,
	submitHandler,
	formErrors,
	quantityValidator,
}) => {
	return (
		<div className="order-container">
			<div>
				{" "}
				<b>Quantity </b>
				{/* VALIDATION ERROR FOR QUANTITY */}
				<p className="validation-error">{formErrors.quantity}</p>
				<input type="number" name="quantity" onChange={quantityValidator} />
			</div>
			<div>
				{" "}
				<button disabled={submitDisabled} onSubmit={submitHandler}>
					Add To Order
				</button>{" "}
			</div>
		</div>
	);
};

const Pizza = (props) => {
	const history = useHistory();
	const {
		formValues,
		submitHandler,
		onChangeHandler,
		validator,
		formErrors,
		submitDisabled,
	} = props;

	const redirect = (e) => {
		submitHandler(e);
		history.push("/confirmation");
	};

	// Name and Address validator
	const nameAndAddressValidator = (e) => {
		const { name, value, type, checked } = e.target;
		validator(name, value, type, checked);
	};

	return (
		<div className="pizza-form">
			<h3>Build Your Own Pizza!</h3>
			<form onSubmit={redirect}>
				{/* SIZES DROPDOWN SELECT */}
				<div>
					<label>
						<h4>Choice of Size</h4>
						<select
							name="size"
							value={formValues.size}
							onChange={onChangeHandler}
						>
							<option value=""> -- select size -- </option>
							{sizes.map((size, i) => {
								return <option key={i}> {size} </option>;
							})}
						</select>
					</label>
				</div>

				{/* SAUCES RADIO BUTTONS */}
				<div>
					<label>
						<h4> Choice of Sauce </h4>
						{sauces.map((sauce, i) => {
							return (
								<div key={i} className="list">
									<input
										type="radio"
										name="sauce"
										value={sauce}
										onChange={onChangeHandler}
									/>{" "}
									{sauce}
								</div>
							);
						})}
					</label>
				</div>

				{/* TOPPINGS CHECKBOXES */}
				<div>
					<label>
						<h4>Add Toppings</h4>
						{toppings.map((topping, i) => {
							return (
								<div key={i} className="list">
									{" "}
									<input
										type="checkbox"
										name={topping}
										value={formValues.topping}
										onChange={onChangeHandler}
									/>{" "}
									{topping}{" "}
								</div>
							);
						})}
					</label>
				</div>

				{/* SUBSTITUTE CHECKBOX */}
				<div>
					<label>
						<h4>Choice of Substitute </h4>
						<input
							type="checkbox"
							name="substitute"
							value={formValues.substitute}
							onChange={onChangeHandler}
						/>{" "}
						Gluten Free Crust (+ $100)
					</label>
				</div>

				{/* SPECIAL INSTRUCTIONS TEXT AREA */}
				<div>
					<label>
						<h4> Special Instructions</h4>
						<input
							className="text-area"
							type="text"
							name="instructions"
							value={formValues.instructions}
							onChange={onChangeHandler}
						/>
					</label>
				</div>

				{/* NAME AND ADDRESS TEXT INPUT */}
				<div>
					<label>
						{" "}
						<h4>Name and Address</h4>
						{/* VALIDATION ERROR FOR NAME */}
						<p className="validation-error">{formErrors.name}</p>
						<input
							className="text"
							type="text"
							name="name"
							placeholder="Enter Your Name"
							value={formValues.name}
							onChange={nameAndAddressValidator}
						/>
						{/* VALIDATION ERROR FOR ADDRESS */}
						<p className="validation-error">{formErrors.address}</p>
						<input
							className="text"
							type="text"
							name="address"
							placeholder="Enter Your Address"
							value={formValues.address}
							onChange={nameAndAddressValidator}
						/>
					</label>
				</div>

				<AddToOrder
					submitHandler={submitHandler}
					submitDisabled={submitDisabled}
					formErrors={formErrors}
					quantityValidator={nameAndAddressValidator}
				/>
			</form>
		</div>
	);
};

export default Pizza;
