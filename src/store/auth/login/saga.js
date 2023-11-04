import { takeEvery, fork, put, all, call, apply } from "redux-saga/effects";

// Login Redux States
import { CHECK_LOGIN, LOGOUT_USER } from "./actionTypes";
import { apiError, loginUserSuccessful, logoutUserSuccess } from "./actions";

// AUTH related methods
import { postLogin } from "../../../helpers/auth";

//If user is login then dispatch redux action's are directly from here.
function* loginUser({ payload: { user, history } }) {
	try {
		const response = yield call(postLogin, "/auth/login", {
			username: user.username,
			password: user.password,
		});
		localStorage.setItem("authUser", JSON.stringify(response));
		yield put(loginUserSuccessful(response));
		history.push("/dashboard");
	} catch (error) {
		yield put(apiError(error));
	}
}

function* logoutUser({ payload: { history } }) {
	try {
		localStorage.removeItem("authUser");
		history.push("/login");
	} catch (error) {
		yield put(apiError(error));
	}
}

export function* watchUserLogin() {
	yield takeEvery(CHECK_LOGIN, loginUser);
}

export function* watchUserLogout() {
	yield takeEvery(LOGOUT_USER, logoutUser);
}

function* loginSaga() {
	yield all([fork(watchUserLogin), fork(watchUserLogout)]);
}

export default loginSaga;
