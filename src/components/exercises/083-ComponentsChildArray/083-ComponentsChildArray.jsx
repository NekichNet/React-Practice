import { useState } from 'react';

import UserRow from './UserRow';

function ComponentsChildArray() {
  const initUsers = [
    { id: 6, username: 'Patrick', banned: false },
    { id: 7, username: 'misha228', banned: false },
    { id: 8, username: 'subzero', banned: false },
    { id: 9, username: 'gamer007', banned: false },
    { id: 10, username: '78_oguzok_78', banned: false },
  ];
  const [users, setUsers] = useState(initUsers);

  const handleClick = (id) => () => {
    setUsers(
      users.map((user) => {
        return id === user.id ? { ...user, banned: !user.banned } : user;
      }),
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, username, banned }) => (
          <UserRow
            id={id}
            username={username}
            onClick={handleClick(id)}
            banned={banned}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ComponentsChildArray;
