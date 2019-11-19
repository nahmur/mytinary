import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./cities.css";

export default class Cities extends Component {
  state = {
    listCities: [],
    filterCities: [],
    inputCities: "",
    loading: true
  };

  componentDidMount() {
    const url = "http://localhost:5000/api/cities/";
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({ listCities: data, filterCities: data, loading: false })
      )
      .catch(err => console.log(err));
  }

  filterList = e => {
    var value = e.target.value.toLowerCase();
    let filterCities = this.state.listCities;
    filterCities = filterCities.filter(cities => {
      let name = cities.name.toLowerCase();
      return name.startsWith(value);
    });
    this.setState({ filterCities });
  };

  render() {
    const { loading, filterCities } = this.state;
    return (
      <>
        <Header />
        <div className="container">
          <h3 style={{marginLeft: "10px"}}>Filter our current cities:</h3>
          <input
            type="text"
            onChange={val => this.filterList(val)}
            className="inputStyle"
          />
          {loading ? (
            "Cargando..."
          ) : (
            <>
              {filterCities.length === 0 ? (
                <h2 style={{marginLeft: "10px"}}>City not found</h2>
              ) : (
                <div className="containerCities">
                  {filterCities.map(city => (
                    <Link to={`/cities/${city._id}`} className="containerCity" key={city._id} city={city._id}>
                      <img src={city.url} alt={city.name} />
                      <span>{city.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
          <Footer />
        </div>
      </>
    );
  }
}
