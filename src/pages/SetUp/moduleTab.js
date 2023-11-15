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

const ModuleTab = () => {
	return (
		<TabPane tabId={5}>
			<div>
				<Row>
					<Col lg="6">
						<div className="form-check mb-3">
							<Input
								className="form-check-input"
								type="checkbox"
								value="one"
								id=""
							/>
							<Label className="form-check-label" htmlFor="defaultCheck1">
								Form Checkbox
							</Label>
						</div>
						<div className="form-check mb-3">
							<Input
								className="form-check-input"
								type="checkbox"
								value="two"
								id=""
							/>
							<Label className="form-check-label" htmlFor="defaultCheck2">
								Form Checkbox
							</Label>
						</div>
						<div className="form-check mb-3">
							<Input
								className="form-check-input"
								type="checkbox"
								value="three"
								id=""
							/>
							<Label className="form-check-label" htmlFor="defaultCheck3">
								Form Checkbox
							</Label>
						</div>
						<div className="form-check mb-3">
							<Input
								className="form-check-input"
								type="checkbox"
								value="one"
								id=""
							/>
							<Label className="form-check-label" htmlFor="defaultCheck1">
								Form Checkbox
							</Label>
						</div>
						<div className="form-check mb-3">
							<Input
								className="form-check-input"
								type="checkbox"
								value="two"
								id=""
							/>
							<Label className="form-check-label" htmlFor="defaultCheck2">
								Form Checkbox
							</Label>
						</div>
						<div className="form-check mb-3">
							<Input
								className="form-check-input"
								type="checkbox"
								value="three"
								id=""
							/>
							<Label className="form-check-label" htmlFor="defaultCheck3">
								Form Checkbox
							</Label>
						</div>
					</Col>
					<Col lg="6">
						<div className="form-check mb-3">
							<Input
								className="form-check-input"
								type="checkbox"
								value="one"
								id=""
							/>
							<Label className="form-check-label" htmlFor="defaultCheck1">
								Form Checkbox
							</Label>
						</div>
						<div className="form-check mb-3">
							<Input
								className="form-check-input"
								type="checkbox"
								value="two"
								id=""
							/>
							<Label className="form-check-label" htmlFor="defaultCheck2">
								Form Checkbox
							</Label>
						</div>
						<div className="form-check mb-3">
							<Input
								className="form-check-input"
								type="checkbox"
								value="three"
								id=""
							/>
							<Label className="form-check-label" htmlFor="defaultCheck3">
								Form Checkbox
							</Label>
						</div>
						<div className="form-check mb-3">
							<Input
								className="form-check-input"
								type="checkbox"
								value="one"
								id=""
							/>
							<Label className="form-check-label" htmlFor="defaultCheck1">
								Form Checkbox
							</Label>
						</div>
						<div className="form-check mb-3">
							<Input
								className="form-check-input"
								type="checkbox"
								value="two"
								id=""
							/>
							<Label className="form-check-label" htmlFor="defaultCheck2">
								Form Checkbox
							</Label>
						</div>
						<div className="form-check mb-3">
							<Input
								className="form-check-input"
								type="checkbox"
								value="three"
								id=""
							/>
							<Label className="form-check-label" htmlFor="defaultCheck3">
								Form Checkbox
							</Label>
						</div>
					</Col>
				</Row>
			</div>
		</TabPane>
	);
};

export default ModuleTab;
