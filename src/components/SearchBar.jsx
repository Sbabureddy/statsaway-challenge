import React, { Component } from "react";

export class SearchBar extends Component {


  handleChange = e => {
    this.setState({ input: e.target.value });
    const value = this.state.input;


    const filteredRamen = this.state.restaurants.filter((ramen, index) => {

    })
    const filtered = this.props.restaurants.filter(country =>
      country.Country.match(regex)
    );

  };

  render() {
    const { restaurants } = this.props;
    const { input } = this.state;
    const filteredRamen = [];
    if(input && restaurants.length > 0){
        filteredRamen = restaurants.filter(ramen => ramen.Country.includes(input));
    }
    return (
      <div>

        <ul>

        </ul>
      </div>
    );
  }
}

export default SearchBar;
