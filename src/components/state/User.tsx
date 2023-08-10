import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const loginhandler = () => {
    setUser({
      name: "pooja",
      email: "poojagarva123@gmail.com",
    });
  };
  const logoutHandler = () => {
    setUser(null);
  };
  return (
    <>
      <button onClick={loginhandler}>login</button>
      <button onClick={logoutHandler}>log out</button>
      <p>User name: {user?.name}</p>
      <p>User email: {user?.email}</p>
    </>
  );
};

export default User;
