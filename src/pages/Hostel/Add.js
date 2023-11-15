import React, { useState, useRef } from "react";
import { Card, CardBody, Col, Row, Container, Label, Input } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";

const AddHostel = () => {
	const breadcrumbItems = [
		{ title: "Home", link: "/" },
		{ title: "Hostels", link: "#" },
		{ title: "Add", link: "#" },
	];

	const [state, setState] = useState({
		regCertificate: "",
		ownerPhoto: "",
	});

	const firstname = useRef("");
	const lastname = useRef("");
	const doj = useRef("");
	const gender = useRef("");
	const dob = useRef("");
	const mobile = useRef("");
	const landline = useRef("");
	const owner = useRef("");
	const address = useRef("");
	const email = useRef("");

	const fathername = useRef("");
	const lang = useRef("");
	const countryname = useRef("");
	const statename = useRef("");
	const cityname = useRef("");
	const locname = useRef("");

	const handleRegChange = (event) => {
		setState({
			...state,
			regCertificate: event.target.files[0],
		});
		console.log(state);
	};

	const handlePhotoChange = (event) => {
		setState({
			...state,
			ownerPhoto: event.target.files[0],
		});
		console.log(state);
	};

	const enrollHostel = () => {
		console.log(state);
		return false;
	};

	return (
		<>
			<div className="page-content">
				<Container fluid>
					<Breadcrumbs breadcrumbItems={breadcrumbItems} />
					<Row>
						<Col xs={12}>
							<Card>
								<form  method="post" onSubmit={enrollHostel}>
									<CardBody>
										<h4 className="card-title">Enrollment Form</h4>
										<p className="card-title-desc">
											This form is used enroll the hostel to the system.
										</p>

										<Row className="mb-3">
											<Label
												htmlFor="example-text-input"
												className="col-md-1 col-form-label"
											>
												ID
											</Label>
											<Col md={3}>
												<Input
													readOnly
													type="text"
													placeholder="Auto generated value"
													id="hostel_id"
												/>
											</Col>
											<Label
												htmlFor="jd-input"
												className="col-md-1 col-form-label"
											>
												Joining Date
											</Label>
											<Col md={3}>
												<Input
													required
													ref={doj}
													onChange={(event) =>
														(doj.current = event.target.value)
													}
													type="date"
													id="jd-input"
												/>
											</Col>
											<Label
												htmlFor="gender"
												className="col-md-1 col-form-label"
											>
												Gender
											</Label>
											<Col md={3}>
												<select
													ref={gender}
													onChange={(event) =>
														(gender.current = event.target.value)
													}
													id="gender"
													className="form-control"
													required
													name="gender"
												>
													<option value="">Select</option>
													<option value="male">Male</option>
													<option value="female">Female</option>
												</select>
											</Col>
										</Row>
										<Row className="mb-3"></Row>
										<Row className="mb-2">
											<Label
												htmlFor="firstname-input"
												className="col-md-1 col-form-label"
											>
												First Name
											</Label>
											<Col md={3}>
												<Input
													required
													ref={firstname}
													type="text"
													id="firstname-input"
													onChange={(event) =>
														(firstname.current = event.target.value)
													}
												/>
											</Col>
											<Label
												htmlFor="lastname-input"
												className="col-md-1 col-form-label"
											>
												Last Name
											</Label>
											<Col md={3}>
												<Input
													required
													ref={lastname}
													onChange={(event) =>
														(lastname.current = event.target.value)
													}
													type="text"
													id="lastname-input"
												/>
											</Col>
											<Label
												htmlFor="dob-input"
												className="col-md-1 col-form-label"
											>
												DOB
											</Label>
											<Col md={3}>
												<Input
													required
													ref={dob}
													onChange={(event) =>
														(dob.current = event.target.value)
													}
													type="date"
													id="dob-input"
												/>
											</Col>
										</Row>
										<Row className="mb-3"></Row>
										<Row className="mb-2">
											<Label
												htmlFor="mobile-input"
												className="col-md-1 col-form-label"
											>
												Mobile
											</Label>
											<Col md={3}>
												<Input
													required
													ref={mobile}
													onChange={(event) =>
														(mobile.current = event.target.value)
													}
													type="text"
													placeholder="xxxxxxxxxx"
													id="mobile-input"
												/>
											</Col>
											<Label
												htmlFor="land-input"
												className="col-md-1 col-form-label"
											>
												Landline
											</Label>
											<Col md={3}>
												<Input
													required
													ref={landline}
													onChange={(event) =>
														(landline.current = event.target.value)
													}
													type="text"
													placeholder="xxxxxxxxxx"
													id="land-input"
												/>
											</Col>
											<Label
												htmlFor="owner-input"
												className="col-md-1 col-form-label"
											>
												Owner Type
											</Label>
											<Col md={3}>
												<select
													required
													ref={owner}
													onChange={(event) =>
														(owner.current = event.target.value)
													}
													id="owner-input"
													className="form-control"
													name="ownertype"
												>
													<option value="">Select</option>
													<option value="male">PG</option>
													<option value="female">Hostel</option>
													<option value="male">Flat</option>
													<option value="female">Independent</option>
												</select>
											</Col>
										</Row>
										<Row className="mb-3"></Row>
										<Row className="mb-3">
											<Label
												htmlFor="address-input"
												className="col-md-1 col-form-label"
											>
												Address
											</Label>
											<Col md={6}>
												<textarea
													required
													ref={address}
													onChange={(event) =>
														(address.current = event.target.value)
													}
													id="address-input"
													className="form-control"
												></textarea>
											</Col>
											<Label
												htmlFor="email-input"
												className="col-md-1 col-form-label"
											>
												Email
											</Label>
											<Col md={4}>
												<Input
													required
													ref={email}
													onChange={(event) =>
														(email.current = event.target.value)
													}
													type="text"
													placeholder="Enter email address"
													id="email-input"
												/>
											</Col>
										</Row>
										<Row className="mb-3"></Row>
										<Row className="mb-2">
											<Label
												htmlFor="fathername-input"
												className="col-md-1 col-form-label"
											>
												Father Name
											</Label>
											<Col md={3}>
												<Input
													required
													ref={fathername}
													onChange={(event) =>
														(fathername.current = event.target.value)
													}
													type="text"
													placeholder="Enter Father Name"
													id="fathername-input"
												/>
											</Col>
											<Label
												htmlFor="language-input"
												className="col-md-1 col-form-label"
											>
												Language
											</Label>
											<Col md={3}>
												<select
													required
													ref={lang}
													onChange={(event) =>
														(lang.current = event.target.value)
													}
													id="lang-input"
													className="form-control"
													required
													name="lang"
												>
													<option value="">Select</option>
													<option value="english">English</option>
													<option value="telugu">Telugu</option>
													<option value="hindi">Hindi</option>
												</select>
											</Col>
											<Label
												htmlFor="country-input"
												className="col-md-1 col-form-label"
											>
												Country
											</Label>
											<Col md={3}>
												<Input
													required
													ref={countryname}
													onChange={(event) =>
														(countryname.current = event.target.value)
													}
													type="text"
													placeholder="Enter Country"
													id="country-input"
												/>
											</Col>
										</Row>
										<Row className="mb-3"></Row>
										<Row className="mb-2">
											<Label
												htmlFor="statename-input"
												className="col-md-1 col-form-label"
											>
												State
											</Label>
											<Col md={3}>
												<Input
													required
													ref={statename}
													onChange={(event) =>
														(statename.current = event.target.value)
													}
													type="text"
													placeholder="Enter State Name"
													id="statename-input"
												/>
											</Col>
											<Label
												htmlFor="cityname-input"
												className="col-md-1 col-form-label"
											>
												City
											</Label>
											<Col md={3}>
												<Input
													required
													ref={cityname}
													onChange={(event) =>
														(cityname.current = event.target.value)
													}
													type="text"
													placeholder="Enter City Name"
													id="cityname-input"
												/>
											</Col>
											<Label
												htmlFor="location-input"
												className="col-md-1 col-form-label"
											>
												Location
											</Label>
											<Col md={3}>
												<Input
													ref={locname}
													onChange={(event) =>
														(locname.current = event.target.value)
													}
													type="text"
													placeholder="Property Location from Address/Coordinates"
													id="location-input"
												/>
											</Col>
										</Row>
										<Row className="mb-3"></Row>
										<Row className="mb-2">
											<Label
												htmlFor="registration-certificate"
												className="col-md-1 col-form-label"
											>
												Registration Certificate
											</Label>
											<Col md={5}>
												<Input
													onChange={handleRegChange}
													type="file"
													id="registration-certificate"
												/>
											</Col>
											<Label
												htmlFor="owner-photo"
												className="col-md-1 col-form-label"
											>
												Owner Photo
											</Label>
											<Col md={5}>
												<Input
													onChange={handlePhotoChange}
													type="file"
													id="owner-photo"
												/>
											</Col>
										</Row>
										<Row className="mb-3"></Row>
										<Row className="align-right mb-3">
											<Col md={5}>
												<button type="submit" className="btn btn-primary">
													Enroll
												</button>
											</Col>
											<Col md={5}>
												<button className="btn btn-secondary">Cancel</button>
											</Col>
										</Row>
									</CardBody>
								</form>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default AddHostel;
