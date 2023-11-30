import React from "react";
import "./App.css";
import Navbar from './components/Navbar';
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <TextEditor/>
      </div>
    </>
  );
}

export default App;