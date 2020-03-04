import React, { Component } from "react";


export class RestaruntList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      input: ""
    };
  }

  handleChange = e => this.setState({input: e.target.value});

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/TopRamen"
    )
      .then(res => res.json())
      .then(data => this.setState({ restaurants: data }));
  }

  render() {
    let { restaurants, input } = this.state;
    if(input && restaurants.length > 0){
        restaurants = restaurants.filter(restaurant => restaurant.Country.includes(input));
    }

    return (
      <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="restaurant">
            Search for your Favourite Restaurant by Country wise.
          </label>
          <input
            type="text"
            className="form-control"
            id="restaurant"
            aria-describedby="restaurantHelp"
            value={input}
            onChange={this.handleChange}
          />
          <small id="restaurantHelp" className="form-text text-muted">
            Restaurant list will appear here.
          </small>
        </div>

      </form>
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
