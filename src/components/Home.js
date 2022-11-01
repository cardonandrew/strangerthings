import React from "react";

const Home = (props) => {
  const me = props.me
  console.log('username:', me)
  return (
    <div className="homePage">
    
      <h1>Welcome to Stranger's Things</h1>
      {me?<h3>You are logged in as: {me}</h3>:<h1>Please Login</h1>}
    </div>
  );
};

export default Home;