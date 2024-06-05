const WelcomeMSG = ({onGetPostsClick}) => {
  return (
    <center className="welcome-msg">
      <h1 >There Is No Posts😒😒!!</h1>
      <button type="button" 
      onClick={onGetPostsClick} className="btn btn-primary">Get Posts From Server</button>
    </center>
  );
};

export default WelcomeMSG;
