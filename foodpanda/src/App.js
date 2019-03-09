import React, { Component } from 'react';
import './home/Header.css';
import './App.css';
import Header from './home/Header';
import HeroSection from './home/HeroSection';
import DownloadApp from "./downloadApp/downloadApp";
import Cities from "./cities/cities";
import LoginForm from "./home/login/loginForm";

// import Sofia from "./cities/Sofia";
import HomePage from "./home/HomePage";

import Restaurant from "./restaurant/restaurant"

import { Route,  BrowserRouter} from "react-router-dom";
import Switch from 'react-router-dom/Switch';

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
    this.state.loginForm = <LoginForm login={this.login}/>;
    let main = document.querySelector("main");
    main.className += "main";
    this.setState({ isLogging: true });

    console.log(main)


  }

  login = () => {
    console.log('You have logged in!');
    let loginForm = {...this.state.loginForm};
    loginForm = null;
    this.setState({loginForm})
  }


  render() {

    return (


      <div className="App">

        <Header login={this.showLoginForm} />

        {this.state.loginForm}

        <main className="main">

          {/* <HeroSection />
          <Cities/>
          <DownloadApp /> */}


        </main>
        <Restaurant/>
       {/* <Header />
       <main>
        <BrowserRouter>
        <Switch>
       {/* <HeroSection />
       <Cities/>
       <DownloadApp/> */}
       {/* <Route exact path="/" component={HomePage}/> */}
       {/* <Route exact path="/Sofia" component ={Sofia}/> */}
       {/* </Switch>
       </BrowserRouter>
       </main> */} 

      </div>


    );
  }
}

export default App;
