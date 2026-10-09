function FormingTagsArrayData() {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  const list = arr.map((el) => <li>{el}</li>);

  return <ul>{list}</ul>;
}

export default FormingTagsArrayData;
