import React, { Component } from "react";
import ("./city.css")


class City extends Component {
    render() {
        return (
                <div className="city">
                    <a href={"/" + this.props.name}>
                        <div class="city-div" >
                        <img class="city-pic" alt="" src={require("../cities/images/" + this.props.image)}></img>
                        <div class="city-name">{this.props.name}</div>
                       </div>
                        <span>
                            {this.props.cityLetter}
                        </span>
                    </a>
                </div>
        )
    }
}

export default City;
