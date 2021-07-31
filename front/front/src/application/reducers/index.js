import { combineReducers } from "redux";
import animalReducer from "./animalReducer"
import pastureReducer from "./pastureReducer";
import animalsByPasture from "./animalByPastureReducer"

export default combineReducers({
    animals: animalReducer,
    pastures: pastureReducer,
    animalsByPasture: animalsByPasture
})