import { GET_DATA } from "../actions/common_action";

const initialState = {
  data:[]
};
const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data:action.payload
            };
        
        default:
            return state;
    }
}
export default DataReducer;