import React, { Component } from 'react';
import './home/Header.css';
import './App.css';
import Header from './home/Header';
import HeroSection from './home/HeroSection';




class App extends Component {

  
  render() {

    

    return (
      
     
      <div className="App">
       <Header />
       <main>
       <HeroSection />
       </main>
      </div>
    );
  }
}

export default App;
