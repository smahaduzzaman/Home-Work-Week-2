import React from "react";
import withAuth from "../patterns/hoc/withAuth";

const Dashboard = () => {
  return <div></div>;
};

export default withAuth(Dashboard);

// Error is Fixed by changing the code to this:

// const Dashboard = withAuth(function Dashboard() {
//     return <div>This is Dashboard</div>;
// });

// export default Dashboard;
