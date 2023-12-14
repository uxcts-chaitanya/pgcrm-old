import axios from "axios";
import { del, get, post, put } from "../helpers/api_helper";

const enrollHostel = async (data) => {
	try {
		const response = await post("/hostel/add", data);
		if (response.status === 400 || response.status === 500) throw response.data;
		return response;
	} catch (err) {
		throw err[1];
	}
};

const addIncome = async (data) => {
	console.log(data);
	try {
		const response = await post("/hostel/income/add", data);
		if (response.status === 400 || response.status === 500) throw response.data;
		return response;
	} catch (err) {
		throw err[1];
	}
};

const addUserToHostel = async (data) => {
	console.log(data);
	try {
		const response = await post("/hostel/adduser", data);
		if (response.status === 400 || response.status === 500) throw response.data;
		return response;
	} catch (err) {
		throw err[1];
	}
};

export { enrollHostel, addIncome, addUserToHostel };
