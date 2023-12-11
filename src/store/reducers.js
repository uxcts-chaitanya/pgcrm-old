import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";

// Authentication Module
import Account from "./auth/register/reducer";
import Auth from "./auth/login/reducer";
import Forget from "./auth/forgetpwd/reducer";

const rootReducer = combineReducers({
	// public
	Layout,

	// Authentication
	Account,
	Auth,
	Forget,
});

export default rootReducer;
