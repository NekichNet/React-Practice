function UserRow({ id, username, onClick: handleClick, banned }) {
  return (
    <tr style={{ background: banned ? 'pink' : 'lime' }}>
      <td>{id}</td>
      <td>{username}</td>
      <td>
        <button onClick={handleClick}>
          {banned ? 'Разбанить' : 'Забанить'}
        </button>
      </td>
    </tr>
  );
}

export default UserRow;
