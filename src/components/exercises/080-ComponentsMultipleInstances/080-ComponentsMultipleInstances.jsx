import Employee from './Employee';

function ComponentsMultipleInstances() {
  return (
    <div>
      <Employee name="Евгений" surname="Патрицин" phone="+7 (921) 214-64-54" />
      <hr />
      <Employee name="Александр" surname="Мушкин" phone="+7 (936) 354-75-06" />
      <hr />
      <Employee name="Евгений" surname="Патрицин" phone="+7 (969) 869-87-43" />
    </div>
  );
}

export default ComponentsMultipleInstances;
