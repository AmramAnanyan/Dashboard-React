import { combineReducers, createStore } from "redux";
import { clickReducer, initialClickState, initialLineState } from "../features/lineGraphSlice";
import { initialPieState, pieGraphReducer } from "../features/pieGraphSlice";
import { initialWorlState, worldMapReducer } from "../features/worldMapSlice";

export const store = createStore(combineReducers({
    lineState: clickReducer,
    pieState: pieGraphReducer,
    worldState:worldMapReducer,
}), {
    lineState: initialLineState,
    pieState: initialPieState,
    worldState:initialWorlState,
})