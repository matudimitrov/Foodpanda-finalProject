import React, { Component } from "react";


class Search extends Component {
    render() {
        return (
            <React.Fragment>
                <form action="/action_page.php">
                    <select name="cars">
                        <option value="Volvo">Sofia</option>
                        <option value="Plovdiv">Plovdiv</option>
                        <option value="Bourgas">Bourgas</option>
                        <option value="Varna">Varna</option>
                        <option value="Veliko Tarnovo">Veliko Tarnovo</option>
                    </select>
                    <input type="submit" value="Submit">Избери</input>
                </form>
            </React.Fragment> 
                )
            }
}

export default Search;
