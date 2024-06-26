import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const userData = {
    name: "Rahul",
    age: 22,
  };
  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
};
//custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
