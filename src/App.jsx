import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="outer-container">
      <div className="inner-container">
        <Header />
        <Hero />
        <Footer />
      </div>
    </main>
  );
}

export default App;
