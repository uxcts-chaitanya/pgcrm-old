import React, { useState, useRef } from "react";
import {
	Table,
	Row,
	Col,
	Card,
	CardBody,
	TabContent,
	TabPane,
	NavItem,
	NavLink,
	Label,
	Input,
	Form,
	Progress,
	Container,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";

import TabsUI from "./tabs";
import SetUpTab from "./setupTab";
import GeoLocationTab from "./geolocationTab";
import GalleryTab from "./galleryTab";
import BussinessTab from "./bussinessTab";
import ModuleTab from "./moduleTab";
import UserTab from "./userTab";

const SetUpHostel = () => {
	const breadcrumbItems = [
		{ title: "Home", link: "/" },
		{ title: "Details", link: "#" },
		{ title: "SetUp", link: "#" },
	];

	const [state, setState] = useState({
		activeTab: 1,
		activeTabProgress: 1,
		progressValue: 25,
	});

	const toggleTab = (tab) => {
		if (state.activeTab !== tab) {
			if (tab >= 1 && tab <= 6) {
				setState({
					activeTab: tab,
				});
			}
		}
	};

	return (
		<div className="page-content">
			<Container fluid>
				<Breadcrumbs breadcrumbItems={breadcrumbItems} />
				<Row>
					<Col lg="12">
						<Card>
							<CardBody>
								<h4 className="card-title mb-4">Organization Setup</h4>
								<div id="basic-pills-wizard" className="twitter-bs-wizard">
									<TabsUI toggleTab={toggleTab} state={state} />
									<TabContent
										activeTab={state.activeTab}
										className="twitter-bs-wizard-tab-content"
									>
										<SetUpTab />
										<GeoLocationTab />
										<GalleryTab />
										<BussinessTab />
										<ModuleTab />
										<UserTab />
									</TabContent>
									<ul className="pager wizard twitter-bs-wizard-pager-link">
										<li
											className={
												state.activeTab === 1 ? "previous disabled" : "previous"
											}
										>
											<Link
												to="#"
												onClick={() => {
													toggleTab(state.activeTab - 1);
												}}
											>
												Previous
											</Link>
										</li>
										<li
											className={
												state.activeTab === 6 ? "next disabled" : "next"
											}
										>
											<Link
												to="#"
												onClick={() => {
													toggleTab(state.activeTab + 1);
												}}
											>
												Next
											</Link>
										</li>
									</ul>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SetUpHostel;
