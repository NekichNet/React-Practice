function Employee(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Surname: {props.surname}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default Employee;
