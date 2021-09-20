function Main(props) {
    const {firstName, lastName, email} = props.user;
  return (
    <div>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{email}</div>
    </div>
  );
}

export default Main;
