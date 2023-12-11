import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {} from "../../store/actions";

//Simple bar
import SimpleBar from "simplebar-react";

import SidebarContent from "./SidebarContent";
import AdminSidebarContent from "./AdminSidebarContent";
import HostelSidebarContent from "./HostelSidebarContent";

const Sidebar = (props) => {
	return (
		<React.Fragment>
			<div className="vertical-menu">
				<div data-simplebar className="h-100">
					{props.type !== "condensed" ? (
						<SimpleBar style={{ maxHeight: "100%" }}>
							{props.auth?.loginType === "super_admin" ? (
								<AdminSidebarContent />
							) : (
								<HostelSidebarContent />
							)}
						</SimpleBar>
					) : (
						// {props.auth?.loginType === "super_admin" ? (
						// 	<AdminSidebarContent />
						// ) : (
						// 	<HostelSidebarContent />
						// )}
						<></>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};

const mapStatetoProps = (state) => {
	return {
		layout: state.Layout,
		auth: state.Auth,
	};
};
export default connect(mapStatetoProps, {})(withRouter(Sidebar));
