import axios from "axios";
import { del, get, post, put } from "../helpers/api_helper";

const changePasswordAPI = async (data) => {
	try {
		const response = await post("/profile/cp", data);
		if (response.status === 400 || response.status === 500) throw response.data;
		return response;
	} catch (err) {
		throw err[1];
	}
};

export { changePasswordAPI };
