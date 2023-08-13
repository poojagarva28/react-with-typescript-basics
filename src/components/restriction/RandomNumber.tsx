import React from "react";

type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type Zero = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;
// type RandomNumberProps = {
//   value: number;
//   isPositive?: boolean;
//   isNegative?: boolean;
//   isZero?: boolean;
// };

const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      <p>value:{value}</p>
      <p>isPositive:{isPositive && "isPositive"}</p>
      <p>isNegative:{isNegative && "isNegative"}</p>
      <p>isZero:{isZero && "Zero"}</p>
    </div>
  );
};

export default RandomNumber;
