import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RestaruntList from "./components/RestaruntList";

function App() {
  return (
    <div className="container">
      <h2>Ramen List</h2>
      <RestaruntList />
    </div>
  );
}

export default App;
