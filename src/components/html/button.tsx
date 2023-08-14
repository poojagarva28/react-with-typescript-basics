import React from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
