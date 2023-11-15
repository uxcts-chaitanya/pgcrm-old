import React from "react";
import classnames from "classnames";
import { NavItem, NavLink } from "reactstrap";

const TabsUI = ({ state, toggleTab }) => {
	return (
		<ul className="twitter-bs-wizard-nav nav nav-pills nav-justified">
			<NavItem>
				<NavLink
					className={classnames({
						active: state.activeTab === 1,
					})}
					onClick={() => {
						toggleTab(1);
					}}
				>
					<span className="step-number">01</span>
					<span className="step-title">Setup</span>
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink
					className={classnames({
						active: state.activeTab === 2,
					})}
					onClick={() => {
						toggleTab(2);
					}}
				>
					<span className="step-number">02</span>
					<span className="step-title">Geo Location / offerings</span>
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink
					className={classnames({
						active: state.activeTab === 3,
					})}
					onClick={() => {
						toggleTab(3);
					}}
				>
					<span className="step-number">03</span>
					<span className="step-title">Gallery</span>
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink
					className={classnames({
						active: state.activeTab === 4,
					})}
					onClick={() => {
						toggleTab(4);
					}}
				>
					<span className="step-number">04</span>
					<span className="step-title">Business Page</span>
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink
					className={classnames({
						active: state.activeTab === 5,
					})}
					onClick={() => {
						toggleTab(5);
					}}
				>
					<span className="step-number">05</span>
					<span className="step-title">Modules</span>
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink
					className={classnames({
						active: state.activeTab === 6,
					})}
					onClick={() => {
						toggleTab(6);
					}}
				>
					<span className="step-number">06</span>
					<span className="step-title">Users</span>
				</NavLink>
			</NavItem>
		</ul>
	);
};

export default TabsUI;
