import{FETCH__ITINERARIOS} from '../constant';

const fetch_itin= (itinerarios)=>{return{
    type: FETCH__ITINERARIOS,
    itinerarios:itinerarios
    }
    }
    
    
    export const getTheItin = ()=> dispatch=> {
        console.log('getItin');
        
      return fetch("http://localhost:5000/api/itinerary/", {method:'GET'}
     
      )
      
        
          .then(response => response.json())
          .then(itinerarios =>
    { 
        console.log(itinerarios);
        
        return dispatch(fetch_itin(itinerarios)) }     )
          .catch(err => console.log(err));
      }
    