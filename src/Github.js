import React from "react";
import "./Github.css";

function Github() {
  return (
    <div className="github">
      <div className="github-content">
        <img src="res/github.png" alt="" />
        <h1>View my work on GitHub</h1>
        <button>
          <a href="https://github.com/emcassi">Visit</a>
        </button>
      </div>
    </div>
  );
}

export default Github;
