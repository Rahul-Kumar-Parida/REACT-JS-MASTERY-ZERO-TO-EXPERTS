import { useContext } from "react";
import { AppContext } from "../store/useContext";
const ChildContext = () => {
  const userData = useContext(AppContext);

  return (
    <h1>
      child: I am {userData.name} and age is {userData.age}
    </h1>
  );
};
export default ChildContext;
