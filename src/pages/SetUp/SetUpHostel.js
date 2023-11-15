import React, { useState } from "react";
import {
	Row,
	Col,
	Card,
	CardBody,
	NavItem,
	NavLink,
	Container,
} from "reactstrap";
import classnames from "classnames";
import Breadcrumbs from "../../components/Common/Breadcrumb";

export const SetUpHostel = () => {
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
												<span className="step-title">
													Geo Location / offerings
												</span>
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
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
