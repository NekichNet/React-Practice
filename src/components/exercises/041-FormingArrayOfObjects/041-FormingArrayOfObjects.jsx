function FormingArrayOfObjects() {
  const users = [
    { name: 'Иван', phone: 3646245 },
    { name: 'Дмитрий', phone: 5474356 },
    { name: 'Глеб', phone: 3856434 },
    { name: 'Михаил', phone: 7455463 },
    { name: 'Антон', phone: 3665654 },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li id={crypto.randomUUID()}>
          <span>{user.name}</span>: <span>{user.phone}</span>
        </li>
      ))}
    </ul>
  );
}

export default FormingArrayOfObjects;
