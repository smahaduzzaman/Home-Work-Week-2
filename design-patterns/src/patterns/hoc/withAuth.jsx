import React, { useState, useEffect } from "react";

const withAuth = (Component) => {
  const AuthenticatedComponent = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      fetch("/users")
        .then((res) => res.json())
        .then((data) => {
          if (!data.isAuthenticated) {
            router.push("/login");
          } else {
            setUser(data.user);
          }
        });
    }, []);
    if (user) {
      return <Component />;
    }
    return null;
  };
  return AuthenticatedComponent;
};

export default withAuth;
