import { Fragment } from 'react';
import User from './User';

function ComponentsChildLoop() {
  const m = [
    { id: 6, username: 'Patrick' },
    { id: 7, username: 'misha228' },
    { id: 8, username: 'subzero' },
    { id: 9, username: 'gamer007' },
    { id: 10, username: '78_oguzok_78' },
  ];

  return (
    <div>
      {m.map(({ id, username }) => (
        <Fragment key={id}>
          <User id={id} username={username} />
          <hr />
        </Fragment>
      ))}
    </div>
  );
}

export default ComponentsChildLoop;
