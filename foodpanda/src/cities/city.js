import React, { Component } from "react";


class City extends Component {
    render() {
        return (
            <li>
                <figure>
                    <a class="city" href="/city/ + {City.name}">
                    <picture>
                        <div background-image={this.props.image}>
                       </div>
                    </picture>
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
                </figure>
            </li>
        )
    }
}

export default City;
