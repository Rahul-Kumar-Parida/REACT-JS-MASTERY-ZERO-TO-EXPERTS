import Child from "./Child";

const Parent = ({ user }) => {
  //   const { name, age } = user;
  return (
    <div>
      <h1>
        Parent: My name is {user.name} and my age is {user.age};
      </h1>
      <Child cuser={user}></Child>
    </div>
  );
};
export default Parent;
