import React, { useMemo, useEffect, useState } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
	changeLayout,
	changeSidebarTheme,
	changeSidebarType,
	toggleRightSidebar,
	changeTopbarTheme,
	changeLayoutTheme,
	changeLayoutWidth,
} from "../../store/actions";

// Layout Related Components
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
// import Rightbar from "../CommonForBoth/Rightbar";

const Layout = (props) => {
	const [state, setState] = useState({
		isMobile: false,
	});

	const toggleRightSidebar = () => {
		props.toggleRightSidebar();
	};

	const toggleMenuCallback = () => {
		if (props.leftSideBarType === "default") {
			props.changeSidebarType("condensed", state.isMobile);
		} else if (props.leftSideBarType === "condensed") {
			props.changeSidebarType("default", state.isMobile);
		}
	};

	const capitalizeFirstLetter = (string) => {
		return string.charAt(1).toUpperCase() + string.slice(2);
	};

	const preLoaderCall = () => {
		let currentage = capitalizeFirstLetter(props.location.pathname);
		currentage = currentage.replaceAll("/", "-");
		currentage = currentage.replaceAll("-", " ");

		document.title = currentage + " | PGCRM - A Complete PG Management Tool";

		props.changeSidebarTheme(props.leftSideBarTheme);

		if (props.isPreloader) {
			document.getElementById("preloader").style.display = "block";
			document.getElementById("status").style.display = "block";

			setTimeout(function () {
				document.getElementById("preloader").style.display = "none";
				document.getElementById("status").style.display = "none";
			}, 2500);
		} else {
			document.getElementById("preloader").style.display = "none";
			document.getElementById("status").style.display = "none";
		}
	};

	useEffect(() => {
		preLoaderCall();

		return () => {
			// window.scrollTo(0, 0);
		};
	}, []);

	return (
		<>
			<div id="preloader">
				<div id="status">
					<div className="spinner">
						<i className="ri-loader-line spin-icon"></i>
					</div>
				</div>
			</div>

			<div id="layout-wrapper">
				<Header
					toggleMenuCallback={toggleMenuCallback}
					toggleRightSidebar={toggleRightSidebar}
				/>
				<Sidebar
					theme={props.leftSideBarTheme}
					type={props.leftSideBarType}
					isMobile={state.isMobile}
				/>
				<div className="main-content">
					{props.children}
					<Footer />
				</div>
			</div>
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		...state.Layout,
	};
};

export default connect(mapStatetoProps, {
	changeLayout,
	changeSidebarTheme,
	changeSidebarType,
	toggleRightSidebar,
	changeTopbarTheme,
	changeLayoutTheme,
	changeLayoutWidth,
})(withRouter(Layout));
