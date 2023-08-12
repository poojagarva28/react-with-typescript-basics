import React from "react";
import Login from "./Login";
import { ProfileProp } from "./Profile";

type PrivaterProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProp>;
};

const Private = ({ isLoggedIn, component: Component }: PrivaterProps) => {
  return isLoggedIn ? <Component name="pooja" /> : <Login />;
};

export default Private;
