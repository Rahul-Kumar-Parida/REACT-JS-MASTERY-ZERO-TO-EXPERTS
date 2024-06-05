import { useGlobalContext } from "../store/useContext";
const ChildContext = () => {
  const userData = useGlobalContext;

  return (
    <h1>
      child: I am {userData.name} and age is {userData.age}
    </h1>
  );
};
export default ChildContext;
