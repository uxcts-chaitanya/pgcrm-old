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
import { connect } from "react-redux";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { withRouter, Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { addStaffToHostel } from "../../models/hostels";

const AddStaff = (props) => {
	const imageMimeType = /image\/(png|jpg|jpeg)/i;
	const [file, setFile] = useState(null);
	const [fileDataURL, setFileDataURL] = useState(null);

	const breadcrumbItems = [
		{ title: "Home", link: "/" },
		{ title: "Hostel", link: "#" },
		{ title: "Add Staff", link: "#" },
	];

	const changeHandler = (e) => {
		const file = e.target.files[0];
		if (!file.type.match(imageMimeType)) {
			toastr.error(
				`Invalid Image type. Please upload only png, jpeg, jpg type`
			);
			setFile("");
			return;
		}
		setFile(file);
	};

	useEffect(() => {
		let fileReader,
			isCancel = false;
		if (file) {
			fileReader = new FileReader();
			fileReader.onload = (e) => {
				const { result } = e.target;
				if (result && !isCancel) {
					setFileDataURL(result);
				}
			};
			fileReader.readAsDataURL(file);
		}
		return () => {
			isCancel = true;
			if (fileReader && fileReader.readyState === 1) {
				fileReader.abort();
			}
		};
	}, [file]);

	const user_type = useRef("");
	const user_name = useRef("");
	const user_father_name = useRef("");
	const user_mobile_number = useRef("");
	const user_amount = useRef("");
	const user_billing = useRef("");
	const user_shift = useRef("");
	const user_city = useRef("");
	const user_state = useRef("");
	const user_country = useRef("");
	const user_address = useRef("");
	const user_aadhar_number = useRef("");
	const user_age = useRef("");
	const user_billing_date = useRef("");
	const user_room_floor = useRef("");

	const saveUser = async (event) => {
		event.preventDefault();
		let data = {
			hostel_id: props.user.hostel_id,
			user_type: user_type.current,
			user_name: user_name.current,
			user_father_name: user_father_name.current,
			user_mobile_number: user_mobile_number.current,
			user_amount: user_amount.current,
			user_billing: user_billing.current,
			user_shift: user_shift.current,
			user_city: user_city.current,
			user_state: user_state.current,
			user_country: user_country.current,
			user_address: user_address.current,
			user_aadhar_number: user_aadhar_number.current,
			user_age: user_age.current,
			user_billing_date: user_billing_date.current,
		};
		const response = await addStaffToHostel(data);
		if (response) {
			toastr.success(`Successfully added Staff`);
			props.history.push("/hostel/staff/list");
		} else {
			toastr.error(`Adding User failed !!!`);
		}
	};

	return (
		<>
			<div className="page-content">
				<Container fluid>
					<Breadcrumbs breadcrumbItems={breadcrumbItems} />
					<Row>
						<Col xs={12}>
							<form method="post" onSubmit={(event) => saveUser(event)}>
								<Card>
									<CardHeader>
										<h5>Add Hostel User</h5>
									</CardHeader>
									<CardBody>
										<Row className="mb-3">
											<Label
												htmlFor="example-text-input"
												className="col-md-2 col-form-label"
											>
												Select User Type
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
															required
															ref={user_name}
															onChange={(event) =>
																(user_name.current = event.target.value)
															}
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
															required
															ref={user_father_name}
															onChange={(event) =>
																(user_father_name.current = event.target.value)
															}
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
															required
															ref={user_mobile_number}
															onChange={(event) =>
																(user_mobile_number.current =
																	event.target.value)
															}
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
															ref={user_age}
															onChange={(event) =>
																(user_age.current = event.target.value)
															}
															type="text"
															placeholder="Enter Age"
															id="user_age"
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
															ref={user_aadhar_number}
															onChange={(event) =>
																(user_aadhar_number.current =
																	event.target.value)
															}
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
															ref={user_address}
															onChange={(event) =>
																(user_address.current = event.target.value)
															}
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
															required
															ref={user_country}
															onChange={(event) =>
																(user_country.current = event.target.value)
															}
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
														<Input
															onChange={changeHandler}
															type="file"
															accept=".png, .jpg, .jpeg"
															id="user_profile_photo"
														/>
													</Col>
													<Col md={3}>
														<div
															style={{
																border: "1px solid",
																width: "200px",
																height: "200px",
															}}
														>
															{fileDataURL ? (
																<p className="img-preview-wrapper">
																	{
																		<img
																			width="200px"
																			height="200px"
																			src={fileDataURL}
																			alt="preview"
																		/>
																	}
																</p>
															) : null}
														</div>
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
															required
															ref={user_state}
															onChange={(event) =>
																(user_state.current = event.target.value)
															}
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
															required
															ref={user_city}
															onChange={(event) =>
																(user_city.current = event.target.value)
															}
															type="text"
															placeholder="Enter City Name"
															id="user_city"
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
																ref={user_shift}
																onChange={() => (user_shift.current = "day")}
																type="radio"
																className="radiobutton"
																name="shift_time"
																value="day"
															/>
															Day
														</label>
													</Col>
													<Col md={2}>
														<label>
															<input
																ref={user_shift}
																onChange={() => (user_shift.current = "night")}
																type="radio"
																className="radiobutton"
																name="shift_time"
																value="night"
															/>
															Night
														</label>
													</Col>
													<Col md={2}>
														<label>
															<input
																ref={user_shift}
																onChange={() =>
																	(user_shift.current = "full_day")
																}
																type="radio"
																className="radiobutton"
																name="shift_time"
																value="full_day"
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
															required
															ref={user_billing}
															onChange={(event) =>
																(user_billing.current = event.target.value)
															}
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
														<Input
															required
															ref={user_billing_date}
															onChange={(event) =>
																(user_billing_date.current = event.target.value)
															}
															type="date"
															placeholder="Next Billing Date"
														/>
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
															required
															ref={user_amount}
															onChange={(event) =>
																(user_amount.current = event.target.value)
															}
															type="number"
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
							</form>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

const mapStatetoProps = (state) => {
	return state.Auth;
};

export default withRouter(connect(mapStatetoProps)(AddStaff));
