import * as types from './MobileActionTypes';


const initialState = {
    mobiles:100,
} 

const MobileReducer = (state = initialState, action) => {
    let {type,payload}=action;
    // let undefinedData;
    switch (type) {
        case types.RESET_MOBILE_DATA_REQUEST:
            state = {
                ...state,
            }
            break;
        case types.INC_MOBILES:
            state = {
                ...state, mobiles:state?.mobiles+   parseInt(payload) 
            }
            break;
        case types.DEC_MOBILES:
            state = {
                ...state,mobiles:state?.mobiles-payload
            }
            break;
        default: state = { ...state }
    }
    return state;
}

export default MobileReducer;