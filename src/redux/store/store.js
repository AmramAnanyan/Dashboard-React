import { applyMiddleware, combineReducers, createStore } from "redux";
import { initialUserState } from "../features/data/usersData";
import { clickReducer, initialClickState, initialLineState } from "../features/lineGraphSlice";
import { initialPieState, pieGraphReducer } from "../features/pieGraphSlice";
import { userSliceReduer } from "../features/userTableSlice";
import { initialWorlState, worldMapReducer } from "../features/worldMapSlice";
import thunk from "redux-thunk";
import { initalApiState, loadedUser } from "../features/userApiSlice";

export const store = createStore(combineReducers({
    lineState: clickReducer,
    pieState: pieGraphReducer,
    worldState: worldMapReducer,
    userState: userSliceReduer,
    userApiState:loadedUser,
}), {
    lineState: initialLineState,
    pieState: initialPieState,
    worldState: initialWorlState,
    userState: initialUserState,
    userApiState:initalApiState,
},applyMiddleware(thunk))