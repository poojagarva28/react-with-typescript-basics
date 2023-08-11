import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const Userr = () => {
  const userContext = useContext(UserContext);
  const loginHandler = () => {
    // if (userContext) {
    userContext?.setUser({
      name: "pooja",
      email: "poojagarva123@gmail.com",
    });
    // }
  };
  const logoutHandler = () => {
    // if (userContext) {
    userContext?.setUser(null);
    // }
  };
  return (
    <div>
      <button onClick={loginHandler}>log in</button>
      <button onClick={logoutHandler}>log out</button>
      <p>user name is : {userContext?.user?.name}</p>
      <p>user email is : {userContext?.user?.email}</p>
    </div>
  );
};

export default Userr;
