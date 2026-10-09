import { useState } from 'react';

function StatesUsing() {
  const [selected, selectProduct] = useState();
  const [count, setCount] = useState(0);

  const changeSelection = () => {
    selectProduct(!selected);
    setCount(!selected ? 1 : 0);
  };

  const addCount = (value) => () => {
    setCount((prevCount) => prevCount + value);
  };

  return (
    <>
      <button
        onClick={changeSelection}
        style={{ background: selected ? 'lightgreen' : 'pink' }}
      >
        {selected ? `В корзине (${count})` : 'Не в корзине'}
      </button>
      {selected && (
        <>
          <button onClick={addCount(1)}>+</button>
          <button onClick={addCount(-1)}>-</button>
        </>
      )}
    </>
  );
}

export default StatesUsing;
