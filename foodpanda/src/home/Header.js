import React from 'react';
import logo from './images/pandaLogo.png';




class Header extends React.Component {


    
    componentDidMount() {

        let handleScroll = () => {

            const header = document.querySelector('header');
            if(window.scrollY !== 0) {
            header.style.backgroundColor = "white";
            header.style.boxShadow = "0 2px 16px 0 rgba(0,0,0,0.08)";
            }
            else {
                header.style.backgroundColor = "transparent";
                header.style.boxShadow = "none"; 
            }
            
            
        };
        
        window.addEventListener('scroll', handleScroll);
        
    }

    render() {

        return (
            <React.Fragment>

                <div className="top-section">
                    <header className="header" >
                        <div className="logo-wrapper">
                            <div className="logo">
                                <a href="#"> <img className="panda-logo" src={logo} alt="" /> </a>
                            </div>
                        </div>
                        <div className="mobile-header">
                            <p>/Mobile header/</p>
                        </div>
                        <div className="tools-wrapper">
                            <p>/Tools Section/</p>

                        </div>
                    </header>

                </div>
                <div className="test"> </div>
                <div className="test2"></div>
            </React.Fragment>

        );
    }
}

export default Header;