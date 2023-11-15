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

const GalleryTab = () => {
	return (
		<TabPane tabId={3}>
			<div>
				<Form>
					<Row>
						<div
							style={{
								width: "100%",
								height: "200px",
								textAlign: "center",
								verticalAlign: "center",
								border: "1px solid #CCC",
							}}
						>
							<button
								style={{ marginTop: "100px" }}
								className="btn btn-primary btn-sm"
							>
								Upload
							</button>
						</div>
					</Row>
				</Form>
			</div>
		</TabPane>
	);
};

export default GalleryTab;
