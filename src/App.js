import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Post from "./components/Post";
import RestaruntList from "./components/RestaruntList";

function App() {
  return (
    <div className="container">
      <h2>Ramen List</h2>
      <RestaruntList />
      {/* <Post /> */}
    </div>
  );
}

export default App;
