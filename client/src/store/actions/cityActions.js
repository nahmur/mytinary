import {FETCH_ALL_CITIES} from '../constant'

const fetch_cities= (cities)=>{return{
type: FETCH_ALL_CITIES,
cities:cities
}
}


export const getAllTheCities=()=> dispatch=> {
  return fetch("http://localhost:5000/api/cities/", {method:'GET'}
 
  )
  
    
      .then(response => response.json())
      .then(cities =>
dispatch(fetch_cities(cities))      )
      .catch(err => console.log(err));
  }
