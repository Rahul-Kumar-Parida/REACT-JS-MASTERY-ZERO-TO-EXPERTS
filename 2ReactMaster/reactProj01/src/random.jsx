function Random() {
  let number = Math.round(Math.random() * 100);
  return <h2>Random Number Generator: {number}</h2>;
}

export default Random;
