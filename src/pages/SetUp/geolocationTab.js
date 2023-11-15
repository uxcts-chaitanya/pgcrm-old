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

const GeoLocationTab = () => {
	return (
		<TabPane tabId={2}>
			<div>
				<Form>
					<Row>
						<div class="d-flex align-items-start">
							<div
								class="nav flex-column nav-pills me-3"
								id="v-pills-tab"
								role="tablist"
								aria-orientation="vertical"
							>
								<button
									class="nav-link active"
									id="v-pills-home-tab"
									data-bs-toggle="pill"
									data-bs-target="#v-pills-home"
									type="button"
									role="tab"
									aria-controls="v-pills-home"
									aria-selected="true"
								>
									Geo Location
								</button>
								<button
									class="nav-link"
									id="v-pills-profile-tab"
									data-bs-toggle="pill"
									data-bs-target="#v-pills-profile"
									type="button"
									role="tab"
									aria-controls="v-pills-profile"
									aria-selected="false"
								>
									Day's & Hrs
								</button>
								<button
									class="nav-link"
									id="v-pills-messages-tab"
									data-bs-toggle="pill"
									data-bs-target="#v-pills-messages"
									type="button"
									role="tab"
									aria-controls="v-pills-messages"
									aria-selected="false"
								>
									Add Contact
								</button>
								{/* <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button> */}
							</div>
							<div class="tab-content" id="v-pills-tabContent">
								<div
									class="tab-pane fade show active"
									id="v-pills-home"
									role="tabpanel"
									aria-labelledby="v-pills-home-tab"
								>
									asdfasdfsadfasdfsfd
								</div>
								<div
									class="tab-pane fade"
									id="v-pills-profile"
									role="tabpanel"
									aria-labelledby="v-pills-profile-tab"
								>
									asdfasdfsadfasdfsfdasdfasdfsadfasdfsfd
								</div>
								<div
									class="tab-pane fade"
									id="v-pills-messages"
									role="tabpanel"
									aria-labelledby="v-pills-messages-tab"
								>
									asdfasdfsadfasdfsfdqwrewrqwe
								</div>
								<div
									class="tab-pane fade"
									id="v-pills-settings"
									role="tabpanel"
									aria-labelledby="v-pills-settings-tab"
								>
									asdfasdfsadfasdfsfdasdfasdfsadfasdfsfdasdfasdfsadfasdfsfd
								</div>
							</div>
						</div>
					</Row>
				</Form>
			</div>
		</TabPane>
	);
};

export default GeoLocationTab;
