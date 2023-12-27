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

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { addExpense } from "../../models/hostels";

const AddExpense = (props) => {
	const staff_name = useRef("");
	const payment_to = useRef("");
	const amount = useRef("");
	const ifsc_code = useRef("");
	const pay_mode = useRef("");
	const account_no = useRef("");

	const breadcrumbItems = [
		{ title: "Home", link: "/" },
		{ title: "Hostel", link: "#" },
		{ title: "Add Income", link: "#" },
	];

	const saveIncome = async (event) => {
		event.preventDefault();
		let data = {
			expense_from: staff_name.current,
			amount: amount.current,
			pay_type: payment_to.current,
			pay_mode: pay_mode.current,
			ifsc_code: ifsc_code.current,
			account_no: account_no.current,
		};
		const response = await addExpense(data);
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
			<div className="page-content">
				<form method="post" onSubmit={(event) => saveIncome(event)}>
					<Container fluid>
						<Breadcrumbs breadcrumbItems={breadcrumbItems} />
						<Row>
							<Col xs={12}>
								<Card>
									<CardHeader>
										<h5>Add Hostel Expense</h5>
									</CardHeader>
									<CardBody>
										<Row className="mb-5">
											<Label
												htmlFor="example-text-input"
												className="col-md-1 col-form-label"
											>
												<b>Staff Name</b>
											</Label>

											<Col md={3}>
												<Input
													ref={staff_name}
													type="text"
													placeholder="Enter Staff Name"
													id="staff_name"
													onChange={(event) =>
														(staff_name.current = event.target.value)
													}
												/>
											</Col>
										</Row>
										<Row className="mb-5">
											<Label
												htmlFor="payment_to"
												className="col-md-1 col-form-label"
											>
												<b>Payment to</b>
											</Label>

											<Col md={3}>
												<Input
													ref={payment_to}
													type="text"
													placeholder="Whom you are paying"
													id="payment_to"
													onChange={(event) =>
														(payment_to.current = event.target.value)
													}
												/>
											</Col>
										</Row>
										<Row className="mb-5">
											<Label
												htmlFor="amount"
												className="col-md-1 col-form-label"
											>
												Amount
											</Label>

											<Col md={3}>
												<Input
													ref={amount}
													type="number"
													placeholder="Amount"
													id="amount"
													onChange={(event) =>
														(amount.current = event.target.value)
													}
												/>
											</Col>
										</Row>
										<Row className="mb-5">
											<Label
												htmlFor="pay_mode"
												className="col-md-1 col-form-label"
											>
												Payment Mode
											</Label>
											<Col md={6}>
												<select
													ref={pay_mode}
													id="pay_mode"
													className="form-control"
													required
													name="pay_mode"
													onChange={(event) =>
														(pay_mode.current = event.target.value)
													}
												>
													<option value="">Select</option>
													<option value="cash">Cash</option>
													<option value="upi">UPI</option>
													<option value="card">Card</option>
												</select>
											</Col>
										</Row>
										<Row className="mb-5">
											<Label
												htmlFor="account_no"
												className="col-md-1 col-form-label"
											>
												Account No.
											</Label>

											<Col md={3}>
												<Input
													ref={account_no}
													type="number"
													placeholder="account_no"
													id="account_no"
													onChange={(event) =>
														(account_no.current = event.target.value)
													}
												/>
											</Col>
										</Row>
										<Row className="mb-5">
											<Label
												htmlFor="ifsc_code"
												className="col-md-1 col-form-label"
											>
												IFSC Code.
											</Label>

											<Col md={3}>
												<Input
													ref={ifsc_code}
													type="text"
													placeholder="ifsc_code"
													id="ifsc_code"
													onChange={(event) =>
														(ifsc_code.current = event.target.value)
													}
												/>
											</Col>
										</Row>
									</CardBody>
								</Card>
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
					</Container>
				</form>
			</div>
		</>
	);
};

export default AddExpense;
