import React, { Component } from 'react';
import './home/Header.css';
import './App.css';
import Header from './home/Header';
import HeroSection from './home/HeroSection';
import DownloadApp from "./downloadApp/downloadApp";
import Cities from "./cities/cities";
import LoginForm from "./home/login/loginForm";


class App extends Component {

  state = {
    isLogging: false,
    loginForm: null,
    loggedUser: {
      email: null,
      password: null,
    }
  }

  showLoginForm = event => {
    event.preventDefault();
    console.log("Login");
    this.state.loginForm = <LoginForm approved={()=>this.login}/>;
    let main = document.querySelector("main");
    main.className += "main";
    this.setState({ isLogging: true });

    console.log(main)


  }

  login = () => {
    console.log('You have logged in!');
    const loginForm = null;
    this.setState({loginForm})
  }


  render() {

    return (


      <div className="App">

        <Header login={this.showLoginForm} />

        {this.state.loginForm}

        <main className="main">

          <HeroSection />

          <DownloadApp />

        </main>

      </div>


    );
  }
}

export default App;
