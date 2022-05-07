import React from "react";
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"
import Progress from "./Components/Progress"
import Cards from "./Components/Cards"
import Footer from "./Components/Footer"
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Main />
      <Progress />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
