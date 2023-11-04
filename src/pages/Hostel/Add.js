import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";

const AddHostel = () => {
	const [state, setState] = useState({
		breadcrumbItems: [
			{ title: "Home", link: "/" },
			{ title: "Hostels", link: "#" },
			{ title: "Add", link: "#" },
		],
	});
	return (
		<>
			<div className="page-content">
				<Container fluid>
					<Breadcrumbs breadcrumbItems={state.breadcrumbItems} />
				</Container>
			</div>
		</>
	);
};

export default AddHostel;
