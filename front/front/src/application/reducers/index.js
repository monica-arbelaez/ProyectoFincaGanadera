import { combineReducers } from "redux";
import animalReducer from "./animalReducer"
import pastureReducer from "./pastureReducer";

export default combineReducers({
    animals: animalReducer,
    pastures: pastureReducer,
})