type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "loading") {
    message = "loading";
  } else {
    message = "Error fetching data";
  }
  return (
    <div>
      <p>status : {message}</p>
      {/* <p>Loading</p>
      <p>Data fetched successfully</p>
      <p>Error fetchig data</p> */}
    </div>
  );
};
