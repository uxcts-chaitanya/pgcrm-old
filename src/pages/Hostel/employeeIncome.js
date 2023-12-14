import React, { useState, useRef } from "react";
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
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { addIncome } from "../../models/hostels";

const EmployeeIncome = (props) => {
	const employee = props.employee?.filter((u) => u.user_type === "employee");

	const employee_id = useRef("");
	const amount = useRef("");
	const room_number = useRef("");
	const employee_name = useRef("");

	const saveIncome = async (event) => {
		event.preventDefault();

		let data = {
			income_by: employee_id.current, // TODO: Replace with original value.
			// income_name: employee_name.current,
			amount: amount.current,
			pay_type: "Cash",
			pay_mode: "Monthly",
			room_number: 1,
			income_from: "employee",
		};
		console.log(data);
		const response = await addIncome(data);
		if (response) {
			toastr.success(`Income added successfully`);
			// props.history.push("/dashboard");
			// return Redirect("/dashboard");
		} else {
			toastr.error(`Adding income failed`);
		}
	};

	return (
		<>
			<form method="post" onSubmit={(event) => saveIncome(event)}>
				<Row>
					<Col md={6}>
						<Row className="mb-4">
							<Label
								htmlFor="employee_name"
								className="col-md-3 col-form-label"
							>
								Employee
							</Label>
							<Col md={6}>
								<select
									ref={employee_id}
									id="employee_id"
									onChange={(event) =>
										(employee_id.current = event.target.value)
									}
									className="col-md-4 form-control"
								>
									<option value="">Select</option>
									{employee.map((s) => (
										<option value={s._id}>{s.user_name}</option>
									))}
								</select>
							</Col>
						</Row>

						<Row className="mb-4">
							<Label htmlFor="room" className="col-md-3 col-form-label">
								Room No.
							</Label>
							<Col md={6}>
								<Input
									type="text"
									ref={room_number}
									placeholder="Enter Room Number"
									id="room"
									onChange={(event) =>
										(room_number.current = event.target.value)
									}
								/>
							</Col>
						</Row>
						<Row className="mb-4">
							<Label htmlFor="amount" className="col-md-3 col-form-label">
								Amount
							</Label>
							<Col md={6}>
								<Input
									type="number"
									onChange={(event) => (amount.current = event.target.value)}
									placeholder="Amount"
									id="amount"
									ref={amount}
								/>
							</Col>
						</Row>
					</Col>
					<Col md={6}>
						<Row className="mb-4">
							<Label htmlFor="employee_id" className="col-md-3 col-form-label">
								Employee ID
							</Label>
							<Col md={6}>
								<Input
									readOnly
									type="text"
									placeholder="Type Employee name to populate"
									id="employee_id"
									ref={employee_id}
								/>
							</Col>
						</Row>
						<Row className="mb-4">
							<Label htmlFor="mobile" className="col-md-3 col-form-label">
								Mobile
							</Label>
							<Col md={6}>
								<Input
									readOnly
									type="text"
									placeholder="+91 xxxxxxxxxx"
									id="mobile"
								/>
							</Col>
						</Row>
						<Row className="mb-4">
							<Label htmlFor="due_amount" className="col-md-3 col-form-label">
								Due Amount
							</Label>
							<Col md={6}>
								<Input
									readOnly
									type="number"
									placeholder="Due Amount"
									id="due_amount"
								/>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col className="text-end">
						<button type="submit" className="btn btn-primary">
							Save
						</button>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<button type="submit" className="btn btn-secondary">
							Cancel
						</button>
					</Col>
				</Row>
			</form>
		</>
	);
};

export default EmployeeIncome;
