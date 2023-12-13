import axios from "axios";
import accessToken from "./jwt-token-access/accessToken";

//pass new generated access token here
const token = accessToken;

//apply base url for axios
const API_URL =
	"http://ec2-16-171-55-1.eu-north-1.compute.amazonaws.com/api/api";
// const API_URL = "http://localhost:5000/api";

const axiosApi = axios.create({
	baseURL: API_URL,
});

axiosApi.defaults.headers.common["Authorization"] = token;

axiosApi.interceptors.response.use(
	(response) => response,
	(error) => Promise.reject(error)
);

export async function get(url, config = {}) {
	return await axiosApi
		.get(url, { ...config })
		.then((response) => response.data)
		.catch((err) => {
			throw err;
		});
}

export async function post(url, data, config = {}) {
	return await axiosApi
		.post(url, { ...data }, { ...config })
		.then((response) => response.data);
}

export async function put(url, data, config = {}) {
	return axiosApi
		.put(url, { ...data }, { ...config })
		.then((response) => response.data)
		.catch((err) => {
			throw err;
		});
}

export async function del(url, config = {}) {
	return await axiosApi
		.delete(url, { ...config })
		.then((response) => response.data)
		.catch((err) => {
			throw err;
		});
}
