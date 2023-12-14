import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, CardHeader, CardBody } from "reactstrap";
// import {
// 	QueryClient,
// 	QueryClientProvider,
// 	useQuery,
// } from "@tanstack/react-query";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { del, get, post, put } from "../../helpers/api_helper";

// const queryClient = new QueryClient();

const UserList = () => {
	const [users, setUsers] = useState({});

	const [state, setState] = useState({
		breadcrumbItems: [
			{ title: "Home", link: "/" },
			{ title: "Hostels", link: "#" },
			{ title: "Users", link: "#" },
			{ title: "List", link: "#" },
		],
	});

	const getUsers = async () => {
		return await get("/hostel/users/list").then((u) => {
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
										<th>Name</th>
										<th>Floor/Room</th>
										<th>Amount</th>
										<th>Next Payment On</th>
										<th>Room Type</th>
										<th>City</th>
										<th>Mobile</th>
										<th>User</th>
									</tr>
								</thead>
								<tbody>
									{users.length &&
										users.map((u) => (
											<tr>
												<td>{u.user_name}</td>
												<td>
													Floor.{u.user_room_floor} / Room No. {u.user_room_no}
												</td>
												<td>{u.user_amount}</td>
												<td>{new Date(u.user_billing_date).toDateString()}</td>
												<td>{u.user_room_type}</td>
												<td>{u.user_city}</td>
												<td>{u.user_mobile_number}</td>
												<td>{u.user_type}</td>
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

export default UserList;
