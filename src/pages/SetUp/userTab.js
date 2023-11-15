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
} from "reactstrap";

const UserTab = () => {
	return (
		<TabPane tabId={6}>
			<div>
				<Row>
					<Col lg="6">
						<Table responsive className="mb-0">
							<thead>
								<tr>
									<th style={{ width: "50%" }}>Inline</th>
									<th>Examples</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Simple Text Field</td>
									<td>asfasdf</td>
								</tr>
								<tr>
									<td>Empty text field, required</td>
									<td>asfasdf</td>
								</tr>
								<tr>
									<td>Select, local array, custom display</td>
									<td>asfdfasdf</td>
								</tr>

								<tr>
									<td>Combodate</td>
									<td>asfdfasdf</td>
								</tr>
								<tr>
									<td>Textarea, buttons below. Submit by ctrl+enter</td>
									<td>asdfasdf</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col lg="6">
						<Row>
							<Col lg="6">
								<div className="mb-3">
									<Label
										className="form-label"
										htmlFor="basicpill-cardno-input12"
									>
										Credit Card Number
									</Label>
									<Input
										type="text"
										className="form-control"
										id="basicpill-cardno-input12"
									/>
								</div>
							</Col>

							<Col lg="6">
								<div className="mb-3">
									<Label
										className="form-label"
										htmlFor="basicpill-card-verification-input"
									>
										Card Verification Number
									</Label>
									<Input
										type="text"
										className="form-control"
										id="basicpill-card-verification-input"
									/>
								</div>
							</Col>
						</Row>
						<Row>
							<Col lg="6">
								<div className="mb-3">
									<Label
										className="form-label"
										htmlFor="basicpill-expiration-input13"
									>
										Expiration Date
									</Label>
									<Input
										type="text"
										className="form-control"
										id="basicpill-expiration-input13"
									/>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		</TabPane>
	);
};

export default UserTab;
