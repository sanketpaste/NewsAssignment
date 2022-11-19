import { GET_MOVIES1} from "../actions/common_action";
import { GET_MOVIES2 } from "../actions/common_action";

const initialState = {
  list:[],
  horizontalList:[]
};
const MoviesListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES1: 
            return {
                ...state,
                list:action.payload
            };
        case GET_MOVIES2:
            return {
                ...state,
               horizontalList:action.payload
            };
        
        default:
            return state;
    }
}
export default MoviesListReducer;