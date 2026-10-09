function FormingTable() {
  const users = [
    { name: 'Иван', surname: 'Иванов', phone: 3646245 },
    { name: 'Дмитрий', surname: 'Дмитров', phone: 5474356 },
    { name: 'Глеб', surname: 'Глебов', phone: 3856434 },
    { name: 'Михаил', surname: 'Михайлов', phone: 7455463 },
    { name: 'Антон', surname: 'Картошка', phone: 3665654 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <td>Имя</td>
          <td>Фамилия</td>
          <td>Телефон</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FormingTable;
