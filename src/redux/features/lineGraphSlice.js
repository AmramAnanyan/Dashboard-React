import { clickData } from "./data/dataClick";
import { SignUpData } from "./data/dataSignUps";
import { viewData } from "./data/dataView";

export function clickReducer(state = [], action) {
    return state
}

export function getLineGraph(state){
    return state.lineState
}

export const initialLineState = {
    labels: clickData.map((data) => data.year),
    datasets: [
      {
        label: "Clicks",
        data: clickData.map((data) => data.userGain),
        backgroundColor:"#2a71d0",
        borderColor:  "#2a71d0",
        borderWidth: 2,
        tension:0.4,
      },
      {
        label: "Page view",
        data: viewData.map((data) => data.userGain),
        backgroundColor:  "#f3ba2f",
        borderColor:   "#f3ba2f",
        borderWidth: 2,
        tension:0.4,
      },
      {
        label: "Sign Up",
        data: SignUpData.map((data) => data.userGain),
        backgroundColor:"#31d1d1",
        borderColor:  "#31d1d1",
        borderWidth: 2,
        tension:0.4,
      },
  ],
    
}

