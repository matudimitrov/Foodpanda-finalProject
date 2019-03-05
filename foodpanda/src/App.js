import React, { Component } from 'react';
import './home/Header.css';
import './App.css';
import Header from './home/Header';
import HeroSection from './home/HeroSection';
import DownloadApp from "./downloadApp/downloadApp"

class App extends Component {

  
  render() {

    

    return (
      
     
      <div className="App">
       <Header />
       <main>
       <HeroSection />
       <DownloadApp/>
       </main>
       
      </div>
      
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
