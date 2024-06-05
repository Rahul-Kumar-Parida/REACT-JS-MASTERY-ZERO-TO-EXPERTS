const LoadingSpinner = () => {
  return (
    <center>
      <div
        className="spinner-border text-primary welcome-msg"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  );
};

export default LoadingSpinner;
