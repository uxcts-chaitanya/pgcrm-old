import React, { useState, useRef, useEffect } from "react";
import {
	Card,
	CardHeader,
	CardBody,
	Col,
	Row,
	Container,
	Label,
	Input,
} from "reactstrap";

import { del, get, post, put } from "../../helpers/api_helper";

import StudentIncome from "./studentIncome";
import EmployeeIncome from "./employeeIncome";
import OtherIncome from "./otherIncome";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const AddIncome = (props) => {
	const [users, setUsers] = useState([]);
	const getUsers = async () => {
		await get("/hostel/users/list").then((u) => {
			setUsers(u);
		});
	};

	const breadcrumbItems = [
		{ title: "Home", link: "/" },
		{ title: "Hostel", link: "#" },
		{ title: "Add Income", link: "#" },
	];

	const [depositor, setDepositor] = useState("student");

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			<div className="page-content">
				<Container fluid>
					<Breadcrumbs breadcrumbItems={breadcrumbItems} />
					<Row>
						<Col xs={12}>
							<Card>
								<CardHeader>
									<h5>Add Hostel Income</h5>
								</CardHeader>
								<CardBody>
									<Row className="mb-3">
										<Label
											htmlFor="example-text-input"
											className="col-md-1 col-form-label"
										>
											<b>Deposited By</b>
										</Label>
										<Col md={1}></Col>
										<Col md={1}>
											<label>
												<input
													type="radio"
													className="radiobutton"
													name="deposited_by"
													value="deposited_by_student"
													onClick={() => setDepositor("student")}
												/>
												Student
											</label>
										</Col>
										<Col md={2}>
											<label>
												<input
													type="radio"
													className="radiobutton"
													name="deposited_by"
													value="deposited_by_employee"
													onClick={() => setDepositor("employee")}
												/>
												Working Employees
											</label>
										</Col>
										<Col md={1}>
											<label>
												<input
													type="radio"
													className="radiobutton"
													name="deposited_by"
													value="deposited_by_guest"
													onClick={() => setDepositor("guest")}
												/>
												Guests
											</label>
										</Col>
										<Col md={1}>
											<label>
												<input
													type="radio"
													className="radiobutton"
													name="deposited_by"
													value="deposited_by_other"
													onClick={() => setDepositor("others")}
												/>
												Others
											</label>
										</Col>
									</Row>
									<hr />
									<div style={{ clear: "both" }}>&nbsp;</div>
									{depositor === "student" ? (
										<StudentIncome students={users ?? {}} />
									) : (
										<></>
									)}
									{depositor === "employee" ? (
										<EmployeeIncome employee={users ?? {}} />
									) : (
										<></>
									)}
									{depositor === "guest" ? (
										<EmployeeIncome employee={users ?? {}} />
									) : (
										<></>
									)}
									{depositor === "others" ? <OtherIncome /> : <></>}
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default AddIncome;
