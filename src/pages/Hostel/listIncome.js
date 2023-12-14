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

const ListIncome = () => {
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
										<th>Amount</th>
										<th>Date</th>
										<th>From</th>
										<th>Mode</th>
										<th>Payment type</th>
									</tr>
								</thead>
								<tbody>
									{users.length &&
										users.map((u) => {
											const date = new Date(u.income_date);
											return (
												<tr>
													<td>{u.amount}</td>
													<td>{u.income_date}</td>
													<td>{u.income_from ?? "Others"}</td>
													<td>{u.pay_mode}</td>
													<td>{u.pay_type}</td>
												</tr>
											);
										})}
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

export default ListIncome;
