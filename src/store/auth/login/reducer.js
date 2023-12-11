import {
	CHECK_LOGIN,
	LOGIN_USER_SUCCESSFUL,
	API_ERROR,
	LOGOUT_USER,
	LOGOUT_USER_SUCCESS,
} from "./actionTypes";

const authUser = JSON.parse(localStorage.getItem("authUser"));
console.log(authUser);

const initialState = {
	loginError: "aaa",
	message: null,
	loading: false,
	isAuthenticated: authUser?.isAuthenticated ?? false,
	user: authUser?.user ?? {},
};

const Auth = (state = initialState, action) => {
	switch (action.type) {
		case CHECK_LOGIN:
			state = {
				...state,
				loading: true,
			};
			break;
		case LOGIN_USER_SUCCESSFUL:
			console.log(state);
			state = {
				...state,
				isAuthenticated: true,
				user: action.payload.user,
				loading: false,
			};
			break;

		case LOGOUT_USER:
			state = { ...state };
			break;

		case LOGOUT_USER_SUCCESS:
			state = { ...state };
			break;

		case API_ERROR:
			state = {
				...state,
				loading: false,
				loginError: action.payload,
			};
			break;

		default:
			state = { ...state };
			break;
	}
	return state;
};

export default Auth;
