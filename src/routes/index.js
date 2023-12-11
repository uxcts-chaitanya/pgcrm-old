import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import AuthLockScreen from "../pages/Authentication/AuthLockScreen";

// Dashboard
import Dashboard from "../pages/Dashboard/index";

//Utility
import CommingSoon from "../pages/Utility/CommingSoon";
import Error404 from "../pages/Utility/Error404";
import Error500 from "../pages/Utility/Error500";

//Hostel Management
import SetUpHostel from "../pages/SetUp";
import HostelList from "../pages/Hostel/List";
import AddHostel from "../pages/Hostel/Add";
import ChangePassword from "../pages/Profile/cp";

import AddUser from "../pages/Hostel/addUser";
import AddStaff from "../pages/Hostel/addStaff";
import AddIncome from "../pages/Hostel/addIncome";
import AddExpense from "../pages/Hostel/addExpense";

const authProtectedRoutes = [
	{ path: "/dashboard", component: Dashboard },
	{ path: "/hostels/list", component: HostelList },
	{ path: "/hostels/add", component: AddHostel },

	{ path: "/hostel/setup", component: SetUpHostel },
	{ path: "/hostel/user/add", component: AddUser },
	{ path: "/hostel/staff/add", component: AddStaff },
	{ path: "/hostel/income/add", component: AddIncome },
	{ path: "/hostel/expense/add", component: AddExpense },

	// Profiles
	{ path: "/profile/cp", component: ChangePassword },

	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const publicRoutes = [
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: "/forgot-password", component: ForgetPwd },
	{ path: "/register", component: Register },
	{ path: "/lock-screen", component: AuthLockScreen },

	// { path: "/maintenance", component: Maintenance },
	{ path: "/comingsoon", component: CommingSoon },
	{ path: "/404", component: Error404 },
	{ path: "/500", component: Error500 },
];

export { authProtectedRoutes, publicRoutes };
