import React, { Component } from "react";

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
    const value = this.state.input;
    const ulList = document.getElementById("filtered");

    const regex = new RegExp(`^${value}`, "ig");
    const filtered = this.props.restaurants.filter(country =>
      country.Country.match(regex)
    );
    ulList.innerText = filtered.map(country => `${country.Country}`);
  };

  render() {
    const { restaurants } = this.props;
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="restaurant">
              Search for your Favourite Restaurant
            </label>
            <input
              type="text"
              className="form-control"
              id="restaurant"
              aria-describedby="restaurantHelp"
              value={this.state.input}
              onChange={this.handleChange}
            />
            <small id="restaurantHelp" className="form-text text-muted">
              Restaurant list will appear here.
            </small>
          </div>
          <div id="filtered"></div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
