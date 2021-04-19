// Here goes the schema for the form
import * as yup from "yup";

export default yup.object().shape({
	name: yup.string().required("pls enter your name"),
	address: yup.string().required("pls enter your address"),
	quantity: yup.number().positive().required("pls enter at least 1 quantity"),
});
