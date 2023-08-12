import React from "react";

export type ProfileProp = {
  name: string;
};

const Profile = ({ name }: ProfileProp) => {
  return <div>Private profile component. User Name is {name}</div>;
};

export default Profile;
