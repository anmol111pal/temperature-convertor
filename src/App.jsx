import React from 'react';
import './App.css';
import Main from "./Main";
import Heading from "./Heading";
import Footer from "./Footer";

function App() {
  
  return (
    <>
      <section className="outer-section">
        <section className="inner-section">      
          <Heading />
          <Main />
          <Footer />
        </section>
      </section>
    </>
  );
}

export default App;
