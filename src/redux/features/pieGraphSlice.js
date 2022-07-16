import { pieDate } from "./data/pieGraphDate"
import { initialLineState } from "./lineGraphSlice"

export function pieGraphReducer(state = [], action) {
    return state
}
export function getPieGraph(state) {
    return state.pieState
}
export const initialPieState = {
    labels: pieDate.map((data) => data.year),
    datasets: [
        {
        label: "clicks",
        data: pieDate.map((data) => data.total),
            backgroundColor: [
            "#2a71d0",
            "#31d1d1",
            "#f3ba2f",
            
            ],
        borderColor:  "#171717",
        },
       
       
    ]
}
