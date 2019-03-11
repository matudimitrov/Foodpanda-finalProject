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
import Restaurant from './restaurants/restaurant';
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
    if (event) {
      event.preventDefault();
    }
    console.log("Login");
    this.setState({ form: <div className="page-mask"> <LoginForm login={this.login} register={this.showRegisterForm} close={this.close} /> </div> });
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
    let form = { ...this.state.form };
    form = <div className="page-mask"> <RegisterForm login={this.showLoginForm} close={this.close} register={this.register} /> </div>
    this.setState({ form });
  }

  register = () => {
    console.log('adding new user')
    const newUser = JSON.parse(sessionStorage.getItem('usersList'));
    const userList = [...this.state.userList];
    userList.push(newUser[0]);
    this.setState({ userList });
    localStorage.setItem('userList', JSON.stringify(userList));
    this.close();
  }

  close = () => {
    console.log('Close');
    this.setState({ form: null });
  }

  componentDidMount() {
    let menu = require('./restaurants/menu/menu.json');
    let appetizers = menu.categorys[0]["menu-items"];
    let finoSides = menu.categorys[1]["menu-items"];
    let chickenMeals = menu.categorys[2]["menu-items"];
    let sharingPlatters = menu.categorys[3]["menu-items"];
    let desserts = menu.categorys[4]["menu-items"];
    let sides = menu.categorys[5]["menu-items"];
    let salads = menu.categorys[6]["menu-items"];
    let newOffering = menu.categorys[7]["menu-items"];
    let burgers = menu.categorys[8]["menu-items"];
    const menu1 = [appetizers, finoSides, chickenMeals];
    const menu2 = [sharingPlatters, desserts, sides];
    const menu3 = [salads, newOffering, burgers];
    this.setState({ menu1, menu2, menu3 });


  }

  render() {

    return (


      <div className="App">
        <React.Fragment>
        <Header login={this.showLoginForm} />

        {this.state.form}

        <main className="main">

      {/* <Restaurant /> */}

          <BrowserRouter>
        <Switch>
        <Route exact path="/" component={HomePage}/> 
       <Route exact path="/Sofia" component ={Sofia}/>
       <Route exact path="/Plovdiv" component ={Plovdiv}/>
       <Route exact path="/Varna" component ={Varna}/>
       <Route exact path="/Bourgas" component ={Bourgas}/>
       <Route exact path="/Veliko Tarnovo" component ={VelikoTarnovo}/>
       <Route exact path="/Sofia/1" render = {() => <Restaurant menu={this.state.menu1} />}/>
       <Route exact path="/Sofia/2" render = {() => <Restaurant menu={this.state.menu2} />}/>
       <Route exact path="/Sofia/3" render = {() => <Restaurant menu={this.state.menu3} />}/>
       <Route exact path="/Sofia/4" render = {() => <Restaurant menu={this.state.menu1} />}/>
       <Route exact path="/Sofia/5" render = {() => <Restaurant menu={this.state.menu2} />}/>

       <Route exact path="/Plovdiv/1" render = {() => <Restaurant menu={this.state.menu1} />}/>
       <Route exact path="/Plovdiv/2" render = {() => <Restaurant menu={this.state.menu2} />}/>
       <Route exact path="/Plovdiv/3" render = {() => <Restaurant menu={this.state.menu3} />}/>
       <Route exact path="/Plovdiv/4" render = {() => <Restaurant menu={this.state.menu1} />}/>
       <Route exact path="/Plovdiv/5" render = {() => <Restaurant menu={this.state.menu2} />}/>

       <Route exact path="/Varna/1" render = {() => <Restaurant menu={this.state.menu1} />}/>
       <Route exact path="/Varna/2" render = {() => <Restaurant menu={this.state.menu2} />}/>
       <Route exact path="/Varna/3" render = {() => <Restaurant menu={this.state.menu3} />}/>
       <Route exact path="/Varna/4" render = {() => <Restaurant menu={this.state.menu1} />}/>
       <Route exact path="/Varna/5" render = {() => <Restaurant menu={this.state.menu2} />}/>

       <Route exact path="/Bourgas/1" render = {() => <Restaurant menu={this.state.menu1} />}/>
       <Route exact path="/Bourgas/2" render = {() => <Restaurant menu={this.state.menu2} />}/>
       <Route exact path="/Bourgas/3" render = {() => <Restaurant menu={this.state.menu3} />}/>
       <Route exact path="/Bourgas/4" render = {() => <Restaurant menu={this.state.menu1} />}/>
       <Route exact path="/Bourgas/5" render = {() => <Restaurant menu={this.state.menu2} />}/>

       <Route exact path="/Veliko Tarnovo/1" render = {() => <Restaurant menu={this.state.menu1} />}/>
       <Route exact path="/Veliko Tarnovo/2" render = {() => <Restaurant menu={this.state.menu2} />}/>
       <Route exact path="/Veliko Tarnovo/3" render = {() => <Restaurant menu={this.state.menu3} />}/>
       <Route exact path="/Veliko Tarnovo/4" render = {() => <Restaurant menu={this.state.menu1} />}/>
       <Route exact path="/Veliko Tarnovo/5" render = {() => <Restaurant menu={this.state.menu2} />}/>

       
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
