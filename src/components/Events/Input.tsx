import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  // events with prop and event as function inside component, here commented is as function inside component
  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log(event.target.value);
  //   };

  return (
    <input type="text" value={props.value} onChange={props.handleChange} />
    // onchange as prop and onchange as funciton inside component, here commented is as funciton inside component
    // onChange={handleChange} />
  );
};
