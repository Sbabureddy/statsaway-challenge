import React, { Component } from "react";
import SearchBar from "./SearchBar";

export class RestaruntList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: []
    };
  }

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/TopRamen"
    )
      .then(res => res.json())
      .then(data => this.setState({ restaurants: data }));
  }

  render() {
    const { restaurants } = this.state;
    return (
      <div className="container">
        <SearchBar restaurants={restaurants} />
        <div className="row">
          {restaurants.map((place, idx) => (
            <div key={idx} className="col-sm-12 col-md-4 mb-1">
              <div className="card mt-3">
                <div className="card-body">
                  <h2>Brand: {place.Brand}</h2>
                  <h4>Variety: {place.Variety}</h4>
                  <h4>
                    Style:
                    {place.Style}
                  </h4>
                  <h3>Country: {place.Country}</h3>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <h4 className="order-2">Stars: {place.Stars}</h4>
                  <h4 className="order-1">Year:{place["Top Ten"]}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RestaruntList;
