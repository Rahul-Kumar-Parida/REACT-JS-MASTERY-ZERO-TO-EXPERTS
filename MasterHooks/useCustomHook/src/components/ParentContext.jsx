import ChildContext from "./ChildContext";

const ParentContext = () => {
  return (
    <div>
      <h2>Get Data</h2>
      <ChildContext />
    </div>
  );
};
export default ParentContext;
