import { Link } from "react-router-dom";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h3>Admin page</h3>
      <p>Select options below to manage products and users.</p>
      <Link className="dashboard_link" to="/manageusers">
        Users
      </Link>
      <Link className="dashboard_link" to="/adminproducts">
        Products
      </Link>
    </div>
  );
}

export default Dashboard;
