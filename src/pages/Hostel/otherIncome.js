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

const OtherIncome = () => {
	const amount = useRef("");
	const reason = useRef("");
	const other_name = useRef("");

	const saveIncome = async (event) => {
		event.preventDefault();
		let data = {
			income_by: 0, // TODO: Replace with original value.
			income_name: other_name.current,
			amount: amount.current,
			pay_type: "Cash",
			pay_mode: "Monthly",
			reason: reason.current,
			room_number: 0,
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
							<Label htmlFor="other_name" className="col-md-3 col-form-label">
								Name
							</Label>
							<Col md={6}>
								<Input
									type="text"
									onChange={(event) =>
										(other_name.current = event.target.value)
									}
									placeholder="Type name"
									id="other_name"
								/>
							</Col>
						</Row>

						<Row className="mb-4">
							<Label htmlFor="reason" className="col-md-3 col-form-label">
								Reason
							</Label>
							<Col md={6}>
								<Input
									type="text"
									onChange={(event) => (reason.current = event.target.value)}
									placeholder="Enter reason"
									id="reason"
								/>
							</Col>
						</Row>
						<Row className="mb-4">
							<Label htmlFor="amount" className="col-md-3 col-form-label">
								Amount
							</Label>
							<Col md={6}>
								<Input
									ref={amount}
									onChange={(event) => (amount.current = event.target.value)}
									type="number"
									placeholder="Amount"
									id="amount"
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

export default OtherIncome;
