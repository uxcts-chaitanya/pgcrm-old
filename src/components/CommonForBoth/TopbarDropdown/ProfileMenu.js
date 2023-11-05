import React, { useEffect, useState } from "react";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

//i18n
import { withNamespaces } from "react-i18next";

// users
import avatar2 from "../../../assets/images/users/avatar-2.jpg";

const ProfileMenu = (props) => {
	const [state, setState] = useState({
		menu: false,
	});

	let auth;

	useEffect(() => {
		auth = JSON.parse(localStorage.getItem("authUser"));
		console.log(auth);
	}, []);

	const toggle = () => {
		setState((prevState) => ({
			menu: !prevState.menu,
		}));
	};

	return (
		<>
			<React.Fragment>
				<Dropdown
					isOpen={state.menu}
					toggle={toggle}
					className="d-inline-block user-dropdown"
				>
					<DropdownToggle
						tag="button"
						className="btn header-item waves-effect"
						id="page-header-user-dropdown"
					>
						<img
							className="rounded-circle header-profile-user me-1"
							src={avatar2}
							alt="Header Avatar"
						/>
						<span className="d-none d-xl-inline-block ms-1 text-transform">
							{auth?.user?.username}
						</span>
						<i className="mdi mdi-chevron-down d-none ms-1 d-xl-inline-block"></i>
					</DropdownToggle>
					<DropdownMenu className="dropdown-menu-end">
						<DropdownItem href="#">
							<i className="ri-user-line align-middle me-1"></i>{" "}
							{props.t("Profile")}
						</DropdownItem>
						<DropdownItem href="#">
							<i className="ri-wallet-2-line align-middle me-1"></i>{" "}
							{props.t("My Wallet")}
						</DropdownItem>
						<DropdownItem className="d-block" href="#">
							<span className="badge badge-success float-end mt-1">11</span>
							<i className="ri-settings-2-line align-middle me-1"></i>{" "}
							{props.t("Settings")}
						</DropdownItem>
						<DropdownItem href="#">
							<i className="ri-lock-unlock-line align-middle me-1"></i>{" "}
							{props.t("Lock screen")}
						</DropdownItem>
						<DropdownItem divider />
						<DropdownItem className="text-danger" href="/logout">
							<i className="ri-shut-down-line align-middle me-1 text-danger"></i>{" "}
							{props.t("Logout")}
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</React.Fragment>
		</>
	);
};

export default withNamespaces()(ProfileMenu);
