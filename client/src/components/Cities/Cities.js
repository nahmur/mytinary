import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import {connect} from "react-redux"
import {getAllTheCities} from "../../store/actions/cityActions"
import "./cities.css";

class Cities extends Component {
  state = {
    listCities: [],
    filterCities: [],
    inputCities: "",
    loading: true
  };

async componentDidMount (){
await this.props.getAllCities()
this.setState({listCities: this.props.ciudades.cityReducer.citiesArray, filterCities: this.props.ciudades.cityReducer.citiesArray, loading:false})
console.log(this.state.listCities)
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
    console.log(this.props.ciudades.cityReducer)
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
                    <Link to={`/cities/${city.name}`} className="containerCity" key={city._id} city={city._id}>
                      <img src={city.imagen} alt={city.name} />
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


const mapStateToProps=(state,ownProps)=>{
  return{ciudades:state}
}

//Se ejecuta y guarda lo que esta en el store en getAllCities
const mapDispatchToProps=dispatch=>{
  return{
    getAllCities:()=>dispatch(getAllTheCities())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Cities
)