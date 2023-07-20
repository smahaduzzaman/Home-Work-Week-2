import React from "react";
import withAuth from "../patterns/hoc/withAuth";

const Profile = () => {
  return (
    <div>
      <h2>This is Profile</h2>
    </div>
  );
};

export default withAuth(Profile);
