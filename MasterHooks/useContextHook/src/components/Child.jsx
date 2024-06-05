const Child = ({ cuser }) => {
  const { name, age } = cuser;
  return (
    <h1>
      child: I am {name} and age is {age}
    </h1>
  );
};
export default Child;
