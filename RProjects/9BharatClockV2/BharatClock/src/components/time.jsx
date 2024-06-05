import { useEffect, useState } from "react";

function Timee() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <p>
      This Is The Current Time: {time.toDateString()} -
      {time.toLocaleTimeString()}
    </p>
  );
}

export default Timee;
