type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <>
      {props.isLoggedIn ? (
        <div>
          Welcome {props.name}. You have {props.messageCount} unread messages.
        </div>
      ) : (
        <div>Welcome Guest.</div>
      )}
    </>
  );
};
