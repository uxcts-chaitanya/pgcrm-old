import React, { useState, useEffect, useRef } from "react";
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
import { Redirect } from "react-router-dom";

// import { del, get, post, put } from "../../helpers/api_helper";

import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { addIncome } from "../../models/hostels";

const StudentIncome = (props) => {
	const students = props.students?.filter((u) => u.user_type === "student");
	const student_id = useRef("");
	const amount = useRef("");
	const pay_type = useRef("");
	const pay_mode = useRef("");
	const room_number = useRef("");

	const saveStudentIncome = async (event) => {
		event.preventDefault();
		let data = {
			income_by: student_id.current,
			amount: amount.current,
			pay_type: pay_type.current,
			pay_mode: pay_mode.current,
			room_number: 1,
			income_from: "student",
		};
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
			<form method="post" onSubmit={(event) => saveStudentIncome(event)}>
				<Row>
					<Col md={6}>
						<Row className="mb-4">
							<Label htmlFor="student_id" className="col-md-3 col-form-label">
								Student
							</Label>
							<Col md={6}>
								<select
									ref={student_id}
									id="student_id"
									onChange={(event) =>
										(student_id.current = event.target.value)
									}
									className="col-md-4 form-control"
								>
									<option value="">Select</option>
									{students.map((s) => (
										<option value={s._id}>{s.user_name}</option>
									))}
								</select>
								{/* <Input
									ref={student_id}
									type="text"
									placeholder="Type Student name to populate"
									id="student_id"
									onChange={(event) =>
										(student_id.current = event.target.value)
									}
								/> */}
							</Col>
						</Row>
						<Row className="mb-4">
							<Label htmlFor="amount" className="col-md-3 col-form-label">
								Amount
							</Label>
							<Col md={6}>
								<Input
									ref={amount}
									type="number"
									placeholder="Amount"
									id="amount"
									onChange={(event) => (amount.current = event.target.value)}
								/>
							</Col>
						</Row>
						<Row className="mb-4">
							<Label htmlFor="pay_type" className="col-md-3 col-form-label">
								Pay
							</Label>
							<Col md={6}>
								<select
									ref={pay_type}
									id="pay_type"
									className="form-control"
									required
									name="pay_type"
									onChange={(event) => (pay_type.current = event.target.value)}
								>
									<option value="deposite">Deposite</option>
									<option value="advanced">Advanced</option>
									<option value="monthly">Monthly</option>
									<option value="food">Food</option>
								</select>
							</Col>
						</Row>
						<Row className="mb-4">
							<Label htmlFor="pay_mode" className="col-md-3 col-form-label">
								Payment Mode
							</Label>
							<Col md={6}>
								<select
									ref={pay_mode}
									id="pay_mode"
									className="form-control"
									required
									name="pay_mode"
									onChange={(event) => (pay_mode.current = event.target.value)}
								>
									<option value="cash">Cash</option>
									<option value="upi">UPI</option>
									<option value="car">Card</option>
								</select>
							</Col>
						</Row>
					</Col>
					<Col md={6}>
						<Row className="mb-4">
							<Label
								htmlFor="mobile_number"
								className="col-md-3 col-form-label"
							>
								Name
							</Label>
							<Col md={6}>
								<Input readOnly type="text" placeholder="Name" id="name" />
							</Col>
						</Row>
						<Row className="mb-4">
							<Label
								htmlFor="mobile_number"
								className="col-md-3 col-form-label"
							>
								Mobile Number
							</Label>
							<Col md={6}>
								<Input
									readOnly
									type="text"
									placeholder="Mobile Number"
									id="mobile_number"
								/>
							</Col>
						</Row>
						<Row className="mb-4">
							<Label
								htmlFor="mobile_number"
								className="col-md-3 col-form-label"
							>
								Room Number
							</Label>
							<Col md={6}>
								<Input
									readOnly
									type="text"
									placeholder="Room Number"
									id="room_number"
									ref={room_number}
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

export default StudentIncome;
