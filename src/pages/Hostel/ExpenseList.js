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

const ExpenseList = () => {
	// const { data, status } = useQuery("users", getUsers);
	const [expenses, setExpenses] = useState({});

	const [state, setState] = useState({
		breadcrumbItems: [
			{ title: "Home", link: "/" },
			{ title: "Hostels", link: "#" },
			{ title: "List", link: "#" },
		],
	});

	const getExpense = async () => {
		return await get("/hostel/expense/list").then((u) => {
			setExpenses(u);
		});
	};

	useEffect(() => {
		getExpense();
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
										<th>Staff Name</th>
										<th>Amount</th>
										<th>Account</th>
										<th>Mode</th>
										<th>Paid To</th>
										<th>Paid On</th>
									</tr>
								</thead>
								<tbody>
									{expenses.length &&
										expenses.map((u) => (
											<tr>
												<td>{u.expense_from}</td>
												<td>{u.amount}</td>
												<td>{u.account_no}</td>
												<td>{u.pay_mode}</td>
												<td>{u.pay_type}</td>
												<td>{new Date(u.expense_date).toDateString()}</td>
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

export default ExpenseList;
