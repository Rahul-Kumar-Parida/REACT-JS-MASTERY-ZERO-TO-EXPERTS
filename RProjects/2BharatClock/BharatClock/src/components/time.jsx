function Timee() {
  let time = new Date();
  return (
    <p>
      This Is The Current Time: {time.toDateString()} -
      {time.toLocaleTimeString()}
    </p>
  );
}

export default Timee;
