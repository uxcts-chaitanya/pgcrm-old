import axios from "axios";
import { del, get, post, put } from "../helpers/api_helper";
import * as url from "../helpers/url_helper";

// Gets the logged in user data from local session
const getLoggedInUser = () => {
	const user = localStorage.getItem("authUser");
	if (user) return JSON.parse(user);
	return null;
};

//is user is logged in
const isUserAuthenticated = () => {
	return getLoggedInUser() !== null;
};

// Register Method
const postRegister = (url, data) => {
	return axios
		.post(url, data)
		.then((response) => {
			if (response.status >= 200 || response.status <= 299)
				return response.data;
			throw response.data;
		})
		.catch((err) => {
			var message;
			if (err.response && err.response.status) {
				switch (err.response.status) {
					case 404:
						message = "Sorry! the page you are looking for could not be found";
						break;
					case 500:
						message =
							"Sorry! something went wrong, please contact our support team";
						break;
					case 401:
						message = "Invalid credentials";
						break;
					default:
						message = err[1];
						break;
				}
			}
			throw message;
		});
};

// Login Method
const postLogin = async (url, data) => {
	// intended for internal control operations.
	return await post(url, data, {});
};

// postForgetPwd
const postForgetPwd = async (url, data) => {
	return await post(url, data, {});
};

export {
	getLoggedInUser,
	isUserAuthenticated,
	postRegister,
	postLogin,
	postForgetPwd,
};
