import React, { Component } from "react";
import ("./city.css")


class City extends Component {
    render() {
        return (
                <div className="city">
                    <a href={"/" + this.props.name}>
                        <div className="city-div" >
                        <img className="city-pic" alt="" src={require("../cities/images/" + this.props.image)}></img>
                        <span className="city-name">{this.props.name}</span>
                        {/* <img  className= "forward" alt="" src="data:image/png;base64,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0"></img> */}
                        </div>
                        {/* <span>
                            {this.props.cityLetter}
                        </span> */}
                    </a>
                </div>
        )
    }
}

export default City;
