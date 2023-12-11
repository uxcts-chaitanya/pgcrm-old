import React, { Component, useEffect } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withNamespaces } from "react-i18next";

import { connect } from "react-redux";
import {
	changeLayout,
	changeLayoutWidth,
	changeSidebarTheme,
	changeSidebarType,
	changePreloader,
} from "../../store/actions";

const AdminSidebarContent = (props) => {
	const activateParentDropdown = (item) => {
		item.classList.add("active");
		const parent = item.parentElement;

		if (parent) {
			parent.classList.add("mm-active");
			const parent2 = parent.parentElement;

			if (parent2) {
				parent2.classList.add("mm-show");

				const parent3 = parent2.parentElement;

				if (parent3) {
					parent3.classList.add("mm-active"); // li
					parent3.childNodes[0].classList.add("mm-active"); //a
					const parent4 = parent3.parentElement;
					if (parent4) {
						parent4.classList.add("mm-active");
					}
				}
			}
			return false;
		}
		return false;
	};

	const initMenu = () => {
		new MetisMenu("#side-menu");

		var matchingMenuItem = null;
		var ul = document.getElementById("side-menu");
		var items = ul.getElementsByTagName("a");
		for (var i = 0; i < items.length; ++i) {
			if (props.location.pathname === items[i].pathname) {
				matchingMenuItem = items[i];
				break;
			}
		}
		if (matchingMenuItem) {
			activateParentDropdown(matchingMenuItem);
		}
	};

	useEffect(() => {
		initMenu();
	}, []);

	return (
		<>
			<div id="sidebar-menu">
				<ul className="metismenu list-unstyled" id="side-menu">
					<li className="menu-title">{props.t("Menu")}</li>

					<li>
						<Link to="/dashboard" className="waves-effect">
							<i className="ri-dashboard-line"></i>
							<span className="badge rounded-pill bg-success float-end">3</span>
							<span className="ms-1">{props.t("Dashboard")}</span>
						</Link>
					</li>

					<li className="menu-title">{props.t("Hostel")}</li>

					<li>
						<Link to="/#" className="has-arrow waves-effect">
							<i className="ri-pencil-ruler-2-line"></i>
							<span className="ms-1">{props.t("Hostel Management")}</span>
						</Link>
						<ul className="sub-menu">
							<li>
								<Link to="/hostels/add">{props.t("Add New")}</Link>
							</li>
							<li>
								<Link to="/hostels/list">{props.t("List")}</Link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</>
	);
};

const mapStatetoProps = (state) => {
	return { ...state.Layout, ...state.Auth };
};

export default withRouter(
	connect(mapStatetoProps, {
		changeLayout,
		changeSidebarTheme,
		changeSidebarType,
		changeLayoutWidth,
		changePreloader,
	})(withNamespaces()(AdminSidebarContent))
);
