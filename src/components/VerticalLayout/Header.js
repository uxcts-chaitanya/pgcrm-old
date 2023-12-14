import React, { Component, useState } from "react";

import { connect } from "react-redux";
import { Form, FormGroup, InputGroup, Input, Button } from "reactstrap";

import { Link } from "react-router-dom";

// Import menuDropdown
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

//Import i18n
import { withNamespaces } from "react-i18next";

// Redux Store
import { toggleRightSidebar } from "../../store/actions";

//Import logo Images
import logosmdark from "../../assets/images/logo.png";
import logodark from "../../assets/images/logo.png";
import logosmlight from "../../assets/images/logo.png";
import logolight from "../../assets/images/logo.png";

const Header = (props) => {
	const [state, setState] = useState({
		isSearch: false,
		isSocialPf: false,
	});

	const toggleMenu = () => {
		props.toggleMenuCallback();
	};

	const toggleFullscreen = () => {
		if (
			!document.fullscreenElement &&
			/* alternative standard method */ !document.mozFullScreenElement &&
			!document.webkitFullscreenElement
		) {
			// current working methods
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
				document.documentElement.webkitRequestFullscreen(
					Element.ALLOW_KEYBOARD_INPUT
				);
			}
		} else {
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			}
		}
	};

	return (
		<>
			<header id="page-topbar">
				<div className="navbar-header">
					<div className="d-flex">
						<div className="navbar-brand-box">
							<Link to="#" className="logo logo-dark">
								<span className="logo-sm">
									<img src={logosmdark} alt="" height="22" />
								</span>
								<span className="logo-lg">
									<img src={logodark} alt="" height="20" />
								</span>
							</Link>

							<Link to="#" className="logo logo-light">
								<span className="logo-sm">
									<img src={logosmlight} alt="" height="52px" />
								</span>
								<span className="logo-lg">
									<img src={logolight} alt="" height="52px" />
								</span>
							</Link>
						</div>

						<Button
							size="sm"
							color="none"
							type="button"
							onClick={toggleMenu}
							className="px-3 font-size-24 header-item waves-effect"
							id="vertical-menu-btn"
						>
							<i className="ri-menu-2-line align-middle"></i>
						</Button>

						<Form className="app-search d-none d-lg-block">
							<div className="position-relative">
								<Input
									type="text"
									className="form-control"
									placeholder={props.t("Search")}
								/>
								<span className="ri-search-line"></span>
							</div>
						</Form>
					</div>

					<div className="d-flex">
						<div className="dropdown d-inline-block d-lg-none ms-2">
							<button
								type="button"
								onClick={() => {
									setState((prev) => {
										prev.isSearch = !prev.isSearch;
									});
								}}
								className="btn header-item noti-icon waves-effect"
								id="page-header-search-dropdown"
							>
								<i className="ri-search-line"></i>
							</button>
							<div
								className={
									state.isSearch === true
										? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
										: "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
								}
								aria-labelledby="page-header-search-dropdown"
							>
								<Form className="p-3">
									<FormGroup className="m-0">
										<InputGroup>
											<Input
												type="text"
												className="form-control"
												placeholder={props.t("Search")}
											/>
											<div className="input-group-append">
												<Button color="primary" type="submit">
													<i className="ri-search-line"></i>
												</Button>
											</div>
										</InputGroup>
									</FormGroup>
								</Form>
							</div>
						</div>

						{/* <LanguageDropdown /> */}

						<div className="dropdown d-none d-lg-inline-block ms-1">
							<Button
								color="none"
								type="button"
								className="header-item noti-icon waves-effect"
								onClick={toggleFullscreen}
							>
								<i className="ri-fullscreen-line"></i>
							</Button>
						</div>

						<NotificationDropdown />

						<ProfileMenu />
					</div>
				</div>
			</header>
		</>
	);
};

const mapStatetoProps = (state) => {
	const { layoutType } = state.Layout;
	return { layoutType };
};

export default connect(mapStatetoProps, { toggleRightSidebar })(
	withNamespaces()(Header)
);
