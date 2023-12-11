import { Link } from "react-router-dom";
const AdminSideBar = (props) => {
	return (
		<>
			<div id="sidebar-menu">
				<ul className="metismenu list-unstyled" id="side-menu">
					<li className="menu-title">{props.t("Menu")}</li>

					<li>
						<Link to="/dashboard" className="waves-effect">
							<i className="ri-dashboard-line"></i>
							<span className="badge rounded-pill bg-success float-end">3</span>
							<span className="ms-1">{props.t("Dashboard")}</span>
						</Link>
					</li>

					<li className="menu-title">{props.t("Hostel")}</li>

					<li>
						<Link to="/#" className="has-arrow waves-effect">
							<i className="ri-pencil-ruler-2-line"></i>
							<span className="ms-1">{props.t("Hostel Management")}</span>
						</Link>
						<ul className="sub-menu">
							{props.Auth?.loginType === "super_admin" ? (
								<li>
									<Link to="/hostel/setup">{props.t("SetUp")}</Link>
								</li>
							) : (
								<></>
							)}

							{props.Auth?.loginType === "hostel_admin" ? (
								<>
									<li>
										<Link to="/hostels/add">{props.t("Add New")}</Link>
									</li>
									<li>
										<Link to="/hostels/list">{props.t("List")}</Link>
									</li>
								</>
							) : (
								<></>
							)}
						</ul>
					</li>

					<li>
						<Link to="/#" className="has-arrow waves-effect">
							<i className="ri-pencil-ruler-2-line"></i>
							<span className="ms-1">{props.t("Staff")}</span>
						</Link>
						<ul className="sub-menu">
							<li>
								<Link to="/hostel/staff/add">{props.t("Add Staff")}</Link>
							</li>
							<li>
								<Link to="/hostel/staff/list">{props.t("Staff List")}</Link>
							</li>
						</ul>
					</li>

					<li>
						<Link to="/#" className="has-arrow waves-effect">
							<i className="ri-pencil-ruler-2-line"></i>
							<span className="ms-1">{props.t("Users")}</span>
						</Link>
						<ul className="sub-menu">
							<li>
								<Link to="/hostel/user/add">{props.t("Add Users")}</Link>
							</li>
							<li>
								<Link to="/hostel/user/list">{props.t("Users List")}</Link>
							</li>
						</ul>
					</li>

					<li>
						<Link to="/#" className="has-arrow waves-effect">
							<i className="ri-pencil-ruler-2-line"></i>
							<span className="ms-1">{props.t("Finance")}</span>
						</Link>
						<ul className="sub-menu">
							<li>
								<Link to="/hostel/income/add">{props.t("Add Income")}</Link>
							</li>
							<li>
								<Link to="/hostel/income/list">{props.t("Income List")}</Link>
							</li>
							<li>
								<Link to="/hostel/expense/add">{props.t("Add Expenses")}</Link>
							</li>
							<li>
								<Link to="/hostel/expense/list">{props.t("Expense List")}</Link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</>
	);
};

export default AdminSideBar;
