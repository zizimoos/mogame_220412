import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page.</p>
      <Link to="/gameapp">
        <div>Game</div>
      </Link>
    </div>
  );
}

export default Home;
