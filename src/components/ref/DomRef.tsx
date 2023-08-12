import React, { useEffect, useRef } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  // const inputRef = useRef<HTMLInputElement>(null!); // if we are sure about value is always there null! which dont require optional chaining in useEffect inputRef.current.focus();

  useEffect(() => {
    inputRef.current?.focus();
    // inputRef.current.focus();
  }, []);

  return <input type="text" ref={inputRef} />;
};

export default DomRef;
