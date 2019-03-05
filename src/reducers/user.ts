import { SET_USER } from '../constants/'
import { Action } from '../interfaces/action';
const initalState: any = {
    auth: {loggedIn : false}
}
function user(state = initalState, action: Action){
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                user: action.payload.user,
                auth: {loggedIn: true}
            }
        default: 
            return state
    }
}

export default user;