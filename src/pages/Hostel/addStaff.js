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

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const AddStaff = () => {
	const breadcrumbItems = [
		{ title: "Home", link: "/" },
		{ title: "Hostel", link: "#" },
		{ title: "Add Staff", link: "#" },
	];

	const user_type = useRef("");

	return (
		<>
			<div className="page-content">
				<Container fluid>
					<Breadcrumbs breadcrumbItems={breadcrumbItems} />
					<Row>
						<Col xs={12}>
							<Card>
								<CardHeader>
									<h5>Add Hostel Staff</h5>
								</CardHeader>
								<CardBody>
									<Row className="mb-3">
										<Label
											htmlFor="example-text-input"
											className="col-md-1 col-form-label"
										>
											Department
										</Label>
										<Col md={3}>
											<select
												required
												ref={user_type}
												onChange={(event) =>
													(user_type.current = event.target.value)
												}
												id="user-input"
												className="form-control"
												name="user_type"
											>
												<option value="">Select</option>
												<option value="frontdesk">Front Desk</option>
												<option value="house_keeping">House Keeping</option>
												<option value="management">Management</option>
											</select>
										</Col>
									</Row>
									<div>
										<hr />
									</div>
									<Row>
										<Col md={6}>
											<Row className="mb-4">
												<Label
													htmlFor="user_name"
													className="col-md-3 col-form-label"
												>
													Name
												</Label>
												<Col md={6}>
													<Input
														type="text"
														placeholder="Enter Name"
														id="user_name"
													/>
												</Col>
											</Row>
											<Row className="mb-4">
												<Label
													htmlFor="user_father_name"
													className="col-md-3 col-form-label"
												>
													Father Name
												</Label>
												<Col md={6}>
													<Input
														type="text"
														placeholder="Enter Father Name"
														id="user_father_name"
													/>
												</Col>
											</Row>
											<Row className="mb-4">
												<Label
													htmlFor="user_mobile_number"
													className="col-md-3 col-form-label"
												>
													Mobile Number
												</Label>
												<Col md={6}>
													<Input
														type="text"
														placeholder="Enter Mobile Number"
														id="user_mobile_number"
													/>
												</Col>
											</Row>
											<Row className="mb-4">
												<Label
													htmlFor="user_age"
													className="col-md-3 col-form-label"
												>
													Age
												</Label>
												<Col md={3}>
													<Input
														type="text"
														placeholder="Enter Age"
														id="user_age"
													/>
												</Col>
											</Row>
											<Row className="mb-4">
												<Label
													htmlFor="user_referred_by"
													className="col-md-3 col-form-label"
												>
													Reffered By
												</Label>
												<Col md={6}>
													<Input
														type="text"
														placeholder="Enter Reffered"
														id="user_referred_by"
													/>
												</Col>
											</Row>
											<Row className="mb-4">
												<Label
													htmlFor="user_aadhar_number"
													className="col-md-3 col-form-label"
												>
													Aadhar Number
												</Label>
												<Col md={4}>
													<Input
														type="text"
														placeholder="xxxx xxxx xxxx xxxx"
														id="user_aadhar_number"
													/>
												</Col>
												<Col md={3}>
													<button className="btn btn-secondary">
														Validate
													</button>
												</Col>
											</Row>
											<Row className="mb-4">
												<Label
													htmlFor="user_studying_name"
													className="col-md-3 col-form-label"
												>
													Studing At
												</Label>
												<Col md={6}>
													<Input
														type="text"
														placeholder="Enter University/College Name"
														id="user_studying_name"
													/>
												</Col>
											</Row>
											<Row className="mb-4">
												<Label
													htmlFor="user_aadhar_attach"
													className="col-md-3 col-form-label"
												>
													Upload Aadhar
												</Label>
												<Col md={6}>
													<Input type="file" id="user_aadhar_attach" />
												</Col>
											</Row>
											<Row className="mb-4">
												<Label
													htmlFor="user_address_attach"
													className="col-md-3 col-form-label"
												>
													Address Proof
												</Label>
												<Col md={6}>
													<Input type="file" id="user_address_attach" />
												</Col>
											</Row>
											<Row className="mb-4">
												<Label
													htmlFor="user_address"
													className="col-md-3 col-form-label"
												>
													Address
												</Label>
												<Col md={6}>
													<Input
														type="text"
														placeholder="Permanent Address"
														id="user_address"
													/>
												</Col>
											</Row>
											<Row className="mb-4">
												<Label
													htmlFor="user_country"
													className="col-md-3 col-form-label"
												>
													Country
												</Label>
												<Col md={6}>
													<Input
														type="text"
														placeholder="Country Name"
														id="user_country"
													/>
												</Col>
											</Row>
										</Col>
										<Col md={6}>
											<Row className="mb-4">
												<Label
													htmlFor="user_profile_photo"
													className="col-md-3 col-form-label"
												>
													Profile Photo
												</Label>
												<Col md={3}>
													<Input type="file" id="user_profile_photo" />
												</Col>
												<Col md={3}>
													<div
														style={{
															border: "1px solid",
															width: "150px",
															height: "150px",
														}}
													></div>
												</Col>
											</Row>
											<Row className="mb-4">
												<Label
													htmlFor="user_state"
													className="col-md-3 col-form-label"
												>
													State
												</Label>
												<Col md={6}>
													<Input
														type="text"
														placeholder="Enter State Name"
														id="user_state"
													/>
												</Col>
											</Row>
											<Row className="mb-4">
												<Label
													htmlFor="user_city"
													className="col-md-3 col-form-label"
												>
													City Name
												</Label>
												<Col md={6}>
													<Input
														type="text"
														placeholder="Enter City Name"
														id="user_city"
													/>
												</Col>
											</Row>
											<Row className="mb-4">
												<Label
													htmlFor="user_reffered_number"
													className="col-md-3 col-form-label"
												>
													Refference Mobile Number
												</Label>
												<Col md={6}>
													<Input
														type="text"
														placeholder="Reffered Person Number"
														id="user_reffered_number"
													/>
												</Col>
											</Row>
											<Row className="mb-4">
												<Label
													htmlFor="user_shift"
													className="col-md-3 col-form-label"
												>
													Shift
												</Label>
												<Col md={2}>
													<label>
														<input
															type="radio"
															className="radiobutton"
															name="shift_time"
															value="user_shift_time_day"
														/>
														Day
													</label>
												</Col>
												<Col md={2}>
													<label>
														<input
															type="radio"
															className="radiobutton"
															name="shift_time"
															value="user_shift_time_night"
														/>
														Night
													</label>
												</Col>
												<Col md={2}>
													<label>
														<input
															type="radio"
															className="radiobutton"
															name="shift_time"
															value="user_shift_time_full_day"
														/>
														Full Day
													</label>
												</Col>
											</Row>

											<Row className="mb-4">
												<Label
													htmlFor="user_billing"
													className="col-md-3 col-form-label"
												>
													Billing
												</Label>
												<Col md={3}>
													<select
														id="billing"
														className="form-control"
														required
														name="user_billing"
													>
														<option value="">Billing Cycle</option>
														<option value="monthly">Monthly</option>
														<option value="quarterly">Quarterly</option>
														<option value="yearly">Yearly</option>
													</select>
												</Col>
												<Col md={3}>
													<Input type="date" placeholder="Next Billing Date" />
												</Col>
											</Row>
											<Row className="mb-4">
												<Label
													htmlFor="user_amount"
													className="col-md-3 col-form-label"
												>
													Amount (In Rupees)
												</Label>
												<Col md={6}>
													<Input
														type="numbe"
														placeholder="Amount to be paid"
														id="user_amount"
													/>
												</Col>
											</Row>
										</Col>
									</Row>
									<div>&nbsp;</div>
									<Row className="align-right mb-3">
										<Col md={5}>
											<button className="btn btn-secondary">Cancel</button>
										</Col>
										<Col md={7}>
											<button type="submit" className="btn btn-primary">
												Add Staff
											</button>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default AddStaff;
