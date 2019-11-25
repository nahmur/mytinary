import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { getTheItin } from "../store/actions/itineraryActions"
import { IoMdArrowRoundBack } from "react-icons/io";


class Itinerary extends Component {
    state = {
        listItin: [],
        filterItin: [],
        city: "",
        loading: true
    };

    async componentDidMount() {
        await this.props.getItin()
        this.setState({ 
            listItin: this.props.itinerarios.itinaryReducer.itinArray, 
            filterItin: this.props.itinerarios.itinaryReducer.itinArray,
            loading: false })
        // console.log(this.state.listItin)
        console.log("did mount")
    }


    // filterItin = nameItinerary => {
    //     // console.log(nameItinerary);
        
    //     var value = nameItinerary;
    //     let filterItin = this.state.listItin;
    //     filterItin = filterItin.filter(unItinerario => {
    //         // console.log('unItinerario',unItinerario);
            
    //         let name = unItinerario.name;
    //         return name === value;
    //     });
    //     this.setState({ filterItin });
    // };

    render() {
        // const { loading , listItin} = this.state;
        // console.log(this.props)
        return (
            <div>
                {this.filterItin(this.props.match.params.itinerary)}
                {
                     this.state.loading ? (
                    "Cargando..."
                     ) : (
                        <div className="containerCities">
                            { this.state.listItin.map(city => (
                                <Link to="/cities/" className="buttonBack">
                                    <img src={city.imagen} alt={city.name} />
                                    <span>{city.name}</span>
                                </Link>
                            ))}
                        </div>
                )}
                <Link to="/cities/" className="buttonBack">
                            <IoMdArrowRoundBack />
                            Back
                </Link>
            </div>
        )
    }
}




const mapStateToProps = (state, ownProps) => {
            return {itinerarios: state }
            }
    
            {/* //Se ejecuta y guarda lo que esta en el store en getItin */}
        const mapDispatchToProps = dispatch => {
            return {
                    getItin: () => dispatch(getTheItin())
            }
        }

        export default connect(
            mapStateToProps,
            mapDispatchToProps)(Itinerary
            )