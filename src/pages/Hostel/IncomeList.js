import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, CardHeader, CardBody } from "reactstrap";
// import {
// 	QueryClient,
// 	QueryClientProvider,
// 	useQuery,
// } from "@tanstack/react-query";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { get } from "../../helpers/api_helper";

// const queryClient = new QueryClient();

const IncomeList = () => {
	// const { data, status } = useQuery("users", getUsers);
	const [users, setUsers] = useState({});

	const [state, setState] = useState({
		breadcrumbItems: [
			{ title: "Home", link: "/" },
			{ title: "Hostels", link: "#" },
			{ title: "List", link: "#" },
		],
	});

	const getUsers = async () => {
		return await get("/hostel/income/list").then((u) => {
			setUsers(u);
		});
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		// <QueryClientProvider client={queryClient}>
		<div className="page-content">
			<Container fluid>
				<Breadcrumbs breadcrumbItems={state.breadcrumbItems} />
			</Container>
			<Row>
				<Col xs={12}>
					<Card>
						<CardHeader>List of Hostels</CardHeader>
						<CardBody>
							<table className="table table-alter">
								<thead>
									<tr>
										<th>Name/ID</th>
										<th>User</th>
										<th>Email</th>
										<th>City</th>
										<th>Approved</th>
										<th>Setup Done</th>
										<th>Added On</th>
									</tr>
								</thead>
								<tbody>
									{users.length &&
										users.map((u) => (
											<tr>
												<td>{u.hostel_id}</td>
												<td>
													{u.firstname} {u.lastname}
												</td>
												<td>{u.email}</td>
												<td>{u.city}</td>
												<td>{u.is_approved ? "Yes" : "No"}</td>
												<td>{u.setup_done ? "Yes" : "No"}</td>
												<td>{new Date(u.joining_date).toDateString()}</td>
											</tr>
										))}
								</tbody>
							</table>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
		// </QueryClientProvider>
	);
};

export default IncomeList;
