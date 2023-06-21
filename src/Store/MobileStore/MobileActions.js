import * as types from './MobileActionTypes';

export const mobileIncrementRequest = (e) => {
    return {
        type: types.INC_MOBILES,
        payload:e
    }
}
export const mobiledecrementRequest = (e) => {
    return {
        type: types.DEC_MOBILES,
        payload:e
    }
}