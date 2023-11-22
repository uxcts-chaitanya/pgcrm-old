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
	CardHeader,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import md5 from "md5";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { changePasswordAPI } from "../../models/profile";

import toastr from "toastr";
import "toastr/build/toastr.min.css";

const ChangePassword = (props) => {
	const breadcrumbItems = [
		{ title: "Home", link: "/" },
		{ title: "Profile", link: "#" },
		{ title: "Change Password", link: "#" },
	];

	const currentPass = useRef("");
	const newPass = useRef();
	const confirmNewPass = useRef("");

	const authUser = JSON.parse(localStorage.getItem("authUser"));

	const submitForCP = async (event) => {
		event.preventDefault();
		if (newPass.current !== confirmNewPass.current) {
			toastr.error(`New Password and confirm new password does not match`);
			// newPass.current.focus();
			return false;
		}

		// change password models.
		let data = {
			currentPass: md5(currentPass.current),
			newPass: md5(newPass.current),
			username: authUser.user.email,
		};

		const response = await changePasswordAPI(data);
		if (response.cpChange) {
			toastr.success(response.message);
			if (
				authUser.user.user_type === "hostel_admin" &&
				!authUser.user.setup_done
			) {
				props.history.push("/hostels/setup");
			} else {
				props.history.push("/dashboard");
			}
		} else {
			toastr.error(response.message);
		}
	};

	return (
		<div className="page-content">
			<Container fluid>
				<Breadcrumbs breadcrumbItems={breadcrumbItems} />
				<Row>
					<Col lg="2"></Col>
					<Col lg="8">
						<form method="post" onSubmit={(event) => submitForCP(event)}>
							<Card>
								<CardHeader>Change Passwword</CardHeader>
								<CardBody>
									<p className="card-title-desc">
										This form is used to change the password the current user.
									</p>
									<Row className="mb-3">
										<Label
											htmlFor="example-text-input"
											className="col-md-3 col-form-label"
										>
											Current Password
										</Label>
										<Col md={7}>
											<Input
												required
												ref={currentPass}
												onChange={(event) =>
													(currentPass.current = event.target.value)
												}
												type="password"
												id="cp-input"
											/>
										</Col>
									</Row>
									<Row className="mb-3">
										<Label
											htmlFor="example-text-input"
											className="col-md-3 col-form-label"
										>
											New Password
										</Label>
										<Col md={7}>
											<Input
												required
												ref={newPass}
												onChange={(event) =>
													(newPass.current = event.target.value)
												}
												type="password"
												id="np-input"
											/>
										</Col>
									</Row>
									<Row className="mb-3">
										<Label
											htmlFor="example-text-input"
											className="col-md-3 col-form-label"
										>
											Confirm New Password
										</Label>
										<Col md={7}>
											<Input
												required
												ref={confirmNewPass}
												onChange={(event) =>
													(confirmNewPass.current = event.target.value)
												}
												type="password"
												id="np-input"
											/>
										</Col>
									</Row>
									<Row className="mb-3"></Row>
									<Row className="mb-3">
										<Col md={7}></Col>
										<Col md={5}>
											<button type="submit" className="btn btn-primary">
												Change Password
											</button>
											&nbsp;&nbsp;&nbsp;&nbsp;
											<button className="btn btn-secondary">Cancel</button>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</form>
					</Col>
					<Col lg="2"></Col>
				</Row>
			</Container>
		</div>
	);
};

export default ChangePassword;
