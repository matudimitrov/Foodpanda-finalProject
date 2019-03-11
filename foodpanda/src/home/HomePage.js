import React, { Component } from 'react';
import HeroSection from '../home/HeroSection';
import DownloadApp from "../downloadApp/downloadApp";
import Cities from "../cities/cities";

class HomePage extends Component {

    render(){
        return (
            <React.Fragment>
            <Cities/>
            </React.Fragment>
        );
    }
}

export default HomePage;
