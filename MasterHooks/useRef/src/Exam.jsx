import { useRef } from "react";

const RefHook = () => {
  const inputRef = useRef();

  const changeBorder = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "#82E0AA";
  };

  return (
    <div>
      {" "}
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={changeBorder}>SUBMIT</button>
    </div>
  );
};

export default RefHook;
