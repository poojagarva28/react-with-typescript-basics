import React from "react";

type HorizontalPostition = "left" | "center" | "right";
type VerticalPostition = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${VerticalPostition}-${HorizontalPostition}`, "center-center">
    | "center";
};

const Toast = ({ position }: ToastProps) => {
  return <div>Toast notification position : {position}</div>;
};

export default Toast;
