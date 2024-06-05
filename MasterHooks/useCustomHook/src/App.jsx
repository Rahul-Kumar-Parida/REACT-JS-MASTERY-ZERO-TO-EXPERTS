import "./App.css";
import Parent from "./components/Parent";
import ParentContext from "./components/ParentContext";
function App() {
  const userData = {
    name: "Rahul",
    age: 22,
  };

  return (
    <div>
      {/* context API (useContext) */}
      <ParentContext />

      {/* Props Drilling */}
      <Parent user={userData}></Parent>
    </div>
  );
}

export default App;
