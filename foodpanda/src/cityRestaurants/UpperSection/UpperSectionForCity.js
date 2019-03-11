import React from 'react';
import '../UpperSection/UpperSectionForCity.css';

class HeroSection extends React.Component {

    render() {

        return (
            <div className="hero-section">

                <div className="hero-img"></div>
                <div className="hero-section-content">
                    <div className="hero-section-text"> <h1>Доставка на храна от най-добрите ресторанти в </h1> <label className="city">{this.props.name}</label>
                        <p></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeroSection;



