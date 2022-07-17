import { loadRandomUser } from "./API/randomUserApi"

export const ACTION_TYPES = {
    GET_USER:" GET_USER",
}
export const initalApiState = {

}
export function loadedUser(state = {}, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_USER: {
            state.userApiState = action.newUser;
            return state.userApiState
        }
        default:
            return state
            
            
    }
    return state
}

export function getUser(newUser) {
    console.log(newUser)
    return {
        type: ACTION_TYPES.GET_USER,
        newUser,
    }
}

export function loadUser() {
    return (dispacth, getState) => {
        return loadRandomUser().then((users) => {
            return users.json();
        }).then((user) => {
            dispacth(getUser(user))
        })
    }
}

export function selectUserName(state) {
   return state.userApiState
}
