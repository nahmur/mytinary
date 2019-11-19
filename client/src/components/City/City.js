import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

//Components
import Header from "../Header/Header";

import "./city.css";

export default class City extends Component {
  state = {
    city: {},
    loading: true
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const url = "http://localhost:5000/api/cities/" + id;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ city: data, loading: false }))
      .catch(err => console.log(err));
  }
  render() {
    const { loading, city } = this.state;
    return (
      <>
        <Header />
        {loading ? (
          "Cargando..."
        ) : (
          <div className="containerImageCity">
            <img src={city.url} alt={city.name} />
            <div className="containerInfoCity">
              <h2>{city.country}</h2>
              <h3>{city.name}</h3>
            </div>
          </div>
        )}
        <div className="buttonBack">
          <Link to="/cities/" className="buttonBack">
            <IoMdArrowRoundBack />
            Back
          </Link>
        </div>
      </>
    );
  }
}
