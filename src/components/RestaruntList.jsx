import React, { useState, useEffect } from "react";

export default function RestaruntList() {
  const [restaurants, setRestaurants] = useState([]);
  const [name, setName] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/TopRamen"
    )
      .then(res => res.json())
      .then(restaurants => {
        setRestaurants(restaurants);
        setFilteredRestaurants([...restaurants]);
      });
  }, []);

  useEffect(() => {
    let filteredRestaurants = restaurants;
    if (name && restaurants.length > 0) {
      filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.Country.includes(name)
      );
    }
    setFilteredRestaurants(filteredRestaurants);
  }, [name, restaurants]);
  return (
    <div>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search for Post Title..."
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </form>
      <div className="row">
        {filteredRestaurants.map((place, idx) => (
          <div key={idx} className="col-sm-12 col-md-6 col-lg-4 mb-1">
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
