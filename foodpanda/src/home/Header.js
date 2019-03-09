import React, {Component} from 'react';
import logo from './images/pandaLogo.png';
import userIcon from './images/user-icon.png';
import bagIcon from './images/bag-icon.png';
import './Header.css';


class Header extends Component {
    

    state = {
        showLoginForm: false,
    }

    // showLoginForm = event => {
    //     event.preventDefault();
    //     this.props.login;
    //     console.log("login");

    // }

    componentDidMount() {
      

        // let handleScroll = () => {

        //     const header = document.querySelector('header');
        //     const iconBox = document.querySelector('.icons');
        //     if (window.scrollY !== 0) {
        //         header.style.backgroundColor = "white";
        //         header.style.boxShadow = "0 2px 16px 0 rgba(0,0,0,0.08)";
        //         iconBox.style.border = "1px solid #ebebeb";
        //         iconBox.style.borderRight = "1px solid #ebebeb";

        //     }
        //     else {
        //         header.style.backgroundColor = "transparent";
        //         header.style.boxShadow = "none";
        //         iconBox.style.border = "none";
        //     }


        // };

        // window.addEventListener('scroll', handleScroll);
        let handleScroll = () => {
            const header = document.querySelector('.navbar');
            if (window.scrollY !== 0) {
                header.style.backgroundColor = "white";
                header.style.boxShadow = "0 2px 16px 0 rgba(0,0,0,0.08)";
                header.style.boxSizing = "border-box";

            }
            else {
                header.style.backgroundColor = "transparent";
                header.style.boxShadow = "none";
            }
        };
        window.addEventListener('scroll', handleScroll);


        


    }
     showInfo = event => {
        event.preventDefault();
        console.log('Info');
    }

    render() {
        let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        let login = <span className="login"> login </span>
        if(currentUser) { 
            login =  <span className="login"> {currentUser.firstName} </span>
        }
       
        return (
        //     <React.Fragment>

        //         <div className="top-section">
        //             <header className="header" >
        //                 <div className="logo-wrapper">
        //                     <div className="logo">
        //                         <a href="#"> <img className="panda-logo" src={logo} alt="" /> </a>
        //                     </div>
        //                 </div>
        //                 <div className="mobile-header">

        //                 </div>
        //                 <div className="tools-wrapper">

        //                     <div className="user-wrapper icons">
        //                         <a className="link" href="" onClick={ this.props.login} >

        //                             <div className="icon-wrapper">
        //                                 <img className="user-icon " src={userIcon} />
        //                             </div>

        //                             <div className="icon-wrapper">
        //                                 <span className="login"> login </span>
        //                             </div>

        //                         </a>
        //                     </div>

        //                     <div className="bag-wrapper icons">

        //                         <a className="link" href="">
        //                             <img className="bag-icon " src={bagIcon} />

        //                         </a>

        //                     </div>

        //                 </div>
        //             </header>

        //         </div>
                
        //     </React.Fragment>

        // );
        <div>
        <nav className="navbar fixed-top navbar-light">
            <a className="navbar-brand" href="#">
                <img src={logo} className="d-inline-block align-top" width={150} alt=""/>
            </a>
            <div className="icons"> 
                <a className="mr-3 icon" href="#">
                    <img src={userIcon} width={30}/>
                     ВЛЕЗ
                </a>
                <a className="icon" href="#">
                    <img src={bagIcon} width={40}/>
                </a>
            </div>
        </nav>
    </div>
)
    }
}

export default Header;