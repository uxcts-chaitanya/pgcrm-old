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

const BussinessTab = () => {
	return (
		<TabPane tabId={4}>
			<div>
				<Row>
					<Form>
						<Row>
							<Col lg="6">
								<div className="mb-3">
									<Label
										className="form-label"
										htmlFor="basicpill-namecard-input11"
									>
										Name on Card
									</Label>
									<Input
										type="text"
										className="form-control"
										id="basicpill-namecard-input11"
									/>
								</div>
							</Col>

							<Col lg="6">
								<div className="mb-3">
									<Label>Credit Card Type</Label>
									<select className="form-select">
										<option defaultValue>Select Card Type</option>
										<option value="AE">American Express</option>
										<option value="VI">Visa</option>
										<option value="MC">MasterCard</option>
										<option value="DI">Discover</option>
									</select>
								</div>
							</Col>
						</Row>
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
					</Form>
				</Row>
			</div>
		</TabPane>
	);
};

export default BussinessTab;
