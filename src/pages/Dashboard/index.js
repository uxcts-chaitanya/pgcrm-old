import React from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Dashboard = (props) => {
	const breadcrumbItems = [
		{ title: "Home", link: "/" },
		{ title: "Dashboard", link: "#" },
	];

	const gotoPage = (page) => {
		props.history.push(page);
	};

	return (
		<>
			<div className="page-content">
				<Container fluid>
					<Breadcrumbs title="Dashboard" breadcrumbItems={breadcrumbItems} />
				</Container>
				<div>
					<div>
						<hr />
					</div>
					<Row>
						<Col md={12} style={{ textAlign: "right" }}>
							<span style={{ marginRight: "20px" }}>
								<button
									className="btn btn-secondary"
									onClick={() => gotoPage("hostel/user/add")}
								>
									Add User
								</button>
							</span>
							<span style={{ marginRight: "20px" }}>
								<button
									className="btn btn-secondary"
									onClick={() => gotoPage("hostel/income/add")}
								>
									Add Income
								</button>
							</span>
							<span style={{ marginRight: "20px" }}>
								<button
									className="btn btn-secondary"
									onClick={() => gotoPage("hostel/expense/add")}
								>
									Add Expenses
								</button>
							</span>

							<span style={{ marginRight: "20px" }}>
								<button
									className="btn btn-secondary"
									onClick={() => gotoPage("hostel/staff/add")}
								>
									Add Staff
								</button>
							</span>
						</Col>
					</Row>
					<div>
						<hr />
					</div>
					<Row>
						<Col md={9}>
							<Row>
								<Col className="col-3">
									<Card>
										<CardHeader>
											<h4 className="card-title">Rooms (140)</h4>
										</CardHeader>
										<CardBody>
											<Row>
												<Col>Availiable</Col>
												<Col className="text-bold">100</Col>
											</Row>
											<div>&nbsp;</div>
											<Row>
												<Col>Occupied</Col>
												<Col className="text-bold">
													<b>40 </b>
												</Col>
											</Row>
										</CardBody>
									</Card>
								</Col>
								<Col className="col-3">
									<Card>
										<CardHeader>
											<h4 className="card-title">Beds (140)</h4>
										</CardHeader>
										<CardBody>
											<Row>
												<Col className="text-bold">Availiable</Col>
												<Col className="text-bold">100</Col>
											</Row>
											<div>&nbsp;</div>
											<Row>
												<Col className="text-bold">Occupied</Col>
												<Col className="text-bold">40</Col>
											</Row>
										</CardBody>
									</Card>
								</Col>
								<Col className="col-3">
									<Card>
										<CardHeader>
											<h4 className="card-title">Users (140)</h4>
										</CardHeader>
										<CardBody>
											<Row>
												<Col>Availiable</Col>
												<Col className="text-bold">100</Col>
											</Row>
											<div>&nbsp;</div>
											<Row>
												<Col>Occupied</Col>
												<Col className="text-bold">40</Col>
											</Row>
										</CardBody>
									</Card>
								</Col>
							</Row>
							<Row>
								<Col className="col-3">
									<Card>
										<CardHeader>
											<h4 className="card-title">Revenue / Day</h4>
										</CardHeader>
										<CardBody>
											<Row>
												<Col className="text-bold">24,000</Col>
											</Row>
										</CardBody>
									</Card>
								</Col>
								<Col className="col-3">
									<Card>
										<CardHeader>
											<h4 className="card-title">Expense / Day</h4>
										</CardHeader>
										<CardBody>
											<Row>
												<Col className="text-bold">14,000</Col>
											</Row>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Col>
						<Col md={3}>Graph here..</Col>
					</Row>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
