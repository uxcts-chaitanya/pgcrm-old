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

const SetUpTab = () => {
	return (
		<TabPane tabId={1}>
			<div>
				<Row>
					<Col lg="12">
						<div className="mb-3">
							<Row>
								<Col lg="9">
									<span>
										Total - Floors: 2 | Personal : 6 | Shared 14 Beds: 62{" "}
									</span>
								</Col>
								<Col lg="3" style={{ textAlign: "right" }}>
									<button className="btn btn-primary btn-sm">Add Floor</button>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
				<Row
					style={{
						border: "1px solid #CCC",
						padding: "5px 5px 15px 5px",
						margin: "10px 0",
					}}
				>
					<Col lg="12">
						<div className="mb-3">
							<Row style={{ padding: "5px 0" }}>
								<Col lg="10">
									<span>
										<h4>Floor - 1</h4>
									</span>
								</Col>
								<Col lg="2" style={{ textAlign: "right" }}>
									<button className="waves-effect waves-light me-1 btn btn-outline-primary">
										<i class=" ri-delete-bin-line"></i>
									</button>
								</Col>
							</Row>

							<Row style={{ padding: "5px 0" }}>
								<Col lg="6">
									<button className=" waves-effect waves-light me-1 btn btn-secondary">
										Add Shared Room
									</button>
									<br></br>
									<span>Number of beds per each shared room (set Global) </span>
									<input
										type="number"
										style={{ width: "50px" }}
										value={"4"}
									></input>
									<span> 1 to 4</span>
								</Col>
								<Col lg="6" style={{ textAlign: "right" }}>
									<button className="waves-effect waves-light me-1 btn btn-primary">
										Add Personal Room
									</button>
									<p>*Personal room will be One bed by default </p>
								</Col>
							</Row>
						</div>
					</Col>
					<Col lg="12">
						<div
							className="mb-12"
							style={{
								background: "#F5F5F5",
								height: "120px",
								padding: "10px",
							}}
						>
							{/* <button className="btn btn-light btn-rounded"> 1 - Personal Room </button> */}
							<button
								type="button"
								class="waves-effect waves-light me-1 btn btn-outline-primary"
							>
								1 - Personal Room{" "}
								<i class="ri-close-line align-middle me-2"></i>
							</button>
							<button
								type="button"
								class="waves-effect waves-light me-1 btn btn-outline-primary"
							>
								2 - Personal Room{" "}
								<i class="ri-close-line align-middle me-2"></i>
							</button>
							<button
								type="button"
								class="waves-effect waves-light me-1 btn btn-outline-primary"
							>
								3 - Personal Room{" "}
								<i class="ri-close-line align-middle me-2"></i>
							</button>
							<button
								type="button"
								class="waves-effect btn btn-outline-secondary"
							>
								1 - Shared Room <i class="ri-close-line align-middle me-2"></i>
							</button>
							<button
								type="button"
								class="waves-effect btn btn-outline-secondary"
							>
								2 - Shared Room <i class="ri-close-line align-middle me-2"></i>
							</button>
							<button
								type="button"
								class="waves-effect btn btn-outline-secondary"
							>
								3 - Shared Room <i class="ri-close-line align-middle me-2"></i>
							</button>
							<button
								type="button"
								class="waves-effect btn btn-outline-secondary"
							>
								4 - Shared Room <i class="ri-close-line align-middle me-2"></i>
							</button>
							<button
								type="button"
								class="waves-effect btn btn-outline-secondary"
							>
								5 - Shared Room <i class="ri-close-line align-middle me-2"></i>
							</button>
							<button
								type="button"
								class="waves-effect btn btn-outline-secondary"
							>
								6 - Shared Room <i class="ri-close-line align-middle me-2"></i>
							</button>
							<button
								type="button"
								class="waves-effect btn btn-outline-secondary"
							>
								7 - Shared Room <i class="ri-close-line align-middle me-2"></i>
							</button>
						</div>
					</Col>
				</Row>
				<Row
					style={{
						border: "1px solid #CCC",
						padding: "5px 5px 15px 5px",
						margin: "10px 0",
					}}
				>
					<Col lg="12">
						<div className="mb-3">
							<Row style={{ padding: "5px 0" }}>
								<Col lg="10">
									<span>
										<h4>Floor - 2</h4>
									</span>
								</Col>
								<Col lg="2" style={{ textAlign: "right" }}>
									<button className="waves-effect waves-light me-1 btn btn-outline-primary">
										<i class=" ri-delete-bin-line"></i>
									</button>
								</Col>
							</Row>

							<Row style={{ padding: "5px 0" }}>
								<Col lg="6">
									<button className=" waves-effect waves-light me-1 btn btn-secondary">
										Add Shared Room
									</button>
									<br></br>
									<span>Number of beds per each shared room (set Global) </span>
									<input
										type="number"
										style={{ width: "50px" }}
										value={"4"}
									></input>
									<span> 1 to 4</span>
								</Col>
								<Col lg="6" style={{ textAlign: "right" }}>
									<button className="waves-effect waves-light me-1 btn btn-primary">
										Add Personal Room
									</button>
									<p>*Personal room will be One bed by default </p>
								</Col>
							</Row>
						</div>
					</Col>
					<Col lg="12">
						<div
							className="mb-12"
							style={{
								background: "#F5F5F5",
								height: "120px",
								padding: "10px",
							}}
						>
							{/* <button className="btn btn-light btn-rounded"> 1 - Personal Room </button> */}
							<button
								type="button"
								class="waves-effect waves-light me-1 btn btn-outline-primary"
							>
								1 - Personal Room{" "}
								<i class="ri-close-line align-middle me-2"></i>
							</button>
							<button
								type="button"
								class="waves-effect waves-light me-1 btn btn-outline-primary"
							>
								2 - Personal Room{" "}
								<i class="ri-close-line align-middle me-2"></i>
							</button>
							<button
								type="button"
								class="waves-effect waves-light me-1 btn btn-outline-primary"
							>
								3 - Personal Room{" "}
								<i class="ri-close-line align-middle me-2"></i>
							</button>
							<button
								type="button"
								class="waves-effect btn btn-outline-secondary"
							>
								1 - Shared Room <i class="ri-close-line align-middle me-2"></i>
							</button>
							<button
								type="button"
								class="waves-effect btn btn-outline-secondary"
							>
								2 - Shared Room <i class="ri-close-line align-middle me-2"></i>
							</button>
							<button
								type="button"
								class="waves-effect btn btn-outline-secondary"
							>
								3 - Shared Room <i class="ri-close-line align-middle me-2"></i>
							</button>
							<button
								type="button"
								class="waves-effect btn btn-outline-secondary"
							>
								4 - Shared Room <i class="ri-close-line align-middle me-2"></i>
							</button>
							<button
								type="button"
								class="waves-effect btn btn-outline-secondary"
							>
								5 - Shared Room <i class="ri-close-line align-middle me-2"></i>
							</button>
							<button
								type="button"
								class="waves-effect btn btn-outline-secondary"
							>
								6 - Shared Room <i class="ri-close-line align-middle me-2"></i>
							</button>
							<button
								type="button"
								class="waves-effect btn btn-outline-secondary"
							>
								7 - Shared Room <i class="ri-close-line align-middle me-2"></i>
							</button>
						</div>
					</Col>
				</Row>
			</div>
		</TabPane>
	);
};

export default SetUpTab;
