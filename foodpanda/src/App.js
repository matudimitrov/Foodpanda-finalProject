import React, { Component } from 'react';
import './home/Header.css';
import './App.css';
import Header from './home/Header';
import HeroSection from './home/HeroSection';
import DownloadApp from "./downloadApp/downloadApp";
import Cities from "./cities/cities";
import LoginForm from "./home/login/loginForm";
import RegisterForm from "./home/login/registration";
import { networkInterfaces } from 'os';


// import Sofia from "./cities/Sofia";
import HomePage from "./home/HomePage";

import Restaurant from "./restaurants/restaurant"

import { Route,  BrowserRouter} from "react-router-dom";
import Switch from 'react-router-dom/Switch';

class App extends Component {

  state = {
    isLogging: false,
    form: null,
    loggedUser: {
      email: null,
      password: null,
    },
    userList: [

    ]
  }
  
  showLoginForm = event => {
    if(event){
    event.preventDefault();
    }
    console.log("Login");
    this.setState({ form: <div className="page-mask"> <LoginForm login={this.login} register={this.showRegisterForm} close={this.close}/> </div> });
    let main = document.querySelector("main");
    main.className += "main";
    this.setState({ isLogging: true });
  }

  login = () => {
    console.log('You have logged in!');
    let form = { ...this.state.form };
    form = null;
    this.setState({ form })
  }

 
  showRegisterForm = () => {
    let form = {...this.state.form};
    form = <div className="page-mask"> <RegisterForm login={this.showLoginForm} close={this.close} register={this.register}/> </div>
    this.setState({form});
  }

  register = () => {
    console.log('adding new user')
    const newUser = JSON.parse(sessionStorage.getItem('usersList'));
    const userList = [...this.state.userList];
    userList.push(newUser[0]);
    this.setState({userList});
    localStorage.setItem('userList', JSON.stringify(userList));
    this.close();
  }

  close = () => {
    console.log('Close');
    this.setState({form: null});
  }

  render() {

    return (


      <div className="App">

        <Header login={this.showLoginForm} />

        {this.state.form}

        <main className="main">

          <HeroSection />*/

          <Restaurant />

          /* <Cities/>
          <DownloadApp /> 


        </main>
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
