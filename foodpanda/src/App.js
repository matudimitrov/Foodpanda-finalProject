import React, { Component } from 'react';
import './home/Header.css';
import './App.css';
import Header from './home/Header';
// import HeroSection from './home/HeroSection';
// import DownloadApp from "./downloadApp/downloadApp";
// import Cities from "./cities/cities";
import LoginForm from "./home/login/loginForm";
import RegisterForm from "./home/login/registration";
import Sofia from  "./cityRestaurants/Sofia/Sofia";
import Plovdiv from  "./cityRestaurants/Plovdiv/Plovdiv";
import Bourgas from  "./cityRestaurants/Bourgas/Bourgas";
import Varna from  "./cityRestaurants/Varna/Varna";
import VelikoTarnovo from  "./cityRestaurants/Veliko Tarnovo/VelikoTarnovo";
import HomePage from "./home/HomePage";
import NoPage from "./home/NoPage";
import Footer from "./home/footer/footer"

import { Route,  BrowserRouter, Switch} from "react-router-dom";
//import Switch from 'react-router-dom/Switch';

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
        <React.Fragment>
        <Header login={this.showLoginForm} />

        {this.state.form}

        <main className="main">
          <BrowserRouter>
        <Switch>
        <Route exact path="/" component={HomePage}/> 
       <Route exact path="/Sofia" component ={Sofia}/>
       <Route exact path="/Plovdiv" component ={Plovdiv}/>
       <Route exact path="/Varna" component ={Varna}/>
       <Route exact path="/Bourgas" component ={Bourgas}/>
       <Route exact path="/Veliko Tarnovo" component ={VelikoTarnovo}/>
       <Route component={NoPage}/>
        </Switch>
       </BrowserRouter>

        </main>
        <footer>
        <Footer/>
        </footer>
        </React.Fragment>
      </div>


    );
  }
}

export default App;
