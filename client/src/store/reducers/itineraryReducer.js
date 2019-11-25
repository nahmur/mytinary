import{FETCH__ITINERARIOS} from '../constant';
const initialState={
    itinArray:[]
}

export default (state=initialState, action)=> {

    switch(action.type){
        case FETCH__ITINERARIOS:{
            return Object.assign({}, state, {itinArray: action.itinerarios})
        }
        default: return state
    }
}