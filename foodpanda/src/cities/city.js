import React, { Component } from "react";
import ("./city.css")


class City extends Component {
    render() {
        return (
                <div className="city">
                    <a href={"/" + this.props.name}>
                        <div class="city-div" >
                        <img width="270px" alt="" src={require("../cities/images/" + this.props.image)}></img>
                       </div>
                   
                    <figcapture>
                        <span>
                            {this.props.cityLetter}
                        </span>
                        <span>
                            {this.props.name}
                        </span>
                        <span>

                        </span>
                    </figcapture>
                    </a>
                </div>
        )
    }
}

export default City;
