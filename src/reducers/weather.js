import { FETCH_WEATHER } from '../actions/index';
export default function(state = [], action){
    switch(action.type) {
        case FETCH_WEATHER:
        return [ action.payload.data, ...state ];
        // this is a cool approach.. action.payload + data from original array.
    }
    return state;
}