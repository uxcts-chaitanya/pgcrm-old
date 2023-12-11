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

const HostelSidebarContent = (props) => {
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
		// let st = setTimeout(() => {
		// 	ut = props?.Auth?.loginType ?? "super_admin";
		// 	console.lo
		// }, 2000);

		// return clearTimeout(st);
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
								<Link to="/hostel/setup">{props.t("SetUp")}</Link>
							</li>
						</ul>
					</li>

					<li>
						<Link to="/#" className="has-arrow waves-effect">
							<i className="ri-pencil-ruler-2-line"></i>
							<span className="ms-1">{props.t("Staff")}</span>
						</Link>
						<ul className="sub-menu">
							<li>
								<Link to="/hostel/staff/add">{props.t("Add Staff")}</Link>
							</li>
							<li>
								<Link to="/hostel/staff/list">{props.t("Staff List")}</Link>
							</li>
						</ul>
					</li>

					<li>
						<Link to="/#" className="has-arrow waves-effect">
							<i className="ri-pencil-ruler-2-line"></i>
							<span className="ms-1">{props.t("Users")}</span>
						</Link>
						<ul className="sub-menu">
							<li>
								<Link to="/hostel/user/add">{props.t("Add Users")}</Link>
							</li>
							<li>
								<Link to="/hostel/user/list">{props.t("Users List")}</Link>
							</li>
						</ul>
					</li>

					<li>
						<Link to="/#" className="has-arrow waves-effect">
							<i className="ri-pencil-ruler-2-line"></i>
							<span className="ms-1">{props.t("Finance")}</span>
						</Link>
						<ul className="sub-menu">
							<li>
								<Link to="/hostel/income/add">{props.t("Add Income")}</Link>
							</li>
							<li>
								<Link to="/hostel/income/list">{props.t("Income List")}</Link>
							</li>
							<li>
								<Link to="/hostel/expense/add">{props.t("Add Expenses")}</Link>
							</li>
							<li>
								<Link to="/hostel/expense/list">{props.t("Expense List")}</Link>
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
	})(withNamespaces()(HostelSidebarContent))
);
