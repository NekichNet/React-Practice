function FormingTagsArray() {
  const paragraphs = [];

  for (let i = 0; i <= 5; i++) {
    paragraphs.push(<li>№{i}</li>);
  }

  return <ul>{paragraphs}</ul>;
}

export default FormingTagsArray;
