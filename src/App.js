import React from "react";
import Navigation from "./Components/Navigation";
import Main from "./Components/Main";
import Progress from "./Components/Progress";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import './App.css';
import data from "./data"

function App() {
  const cards = data.map(item=> {
    return(
      <Cards
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className="app-container">
      <Navigation />
      <Main />
      <Progress />
      <section className="cards-list">
          {cards}
      </section>
      <Footer />
    </div>
  );
}

export default App;
