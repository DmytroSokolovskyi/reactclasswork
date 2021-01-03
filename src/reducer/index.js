import {PUSH_USER, DELL_USER} from "../actionc-types";


const initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PUSH_USER: {
            state.push(action.payload)
            return [...state]
        }
        case DELL_USER: {
          const thatstate = state.filter(item => item !== action.payload);
            console.log( thatstate);
            return [ ...thatstate ]
        }
        default:
            return state
    }
}
