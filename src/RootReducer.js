import { combineReducers } from "redux";
import MobileReducer from "./Store/MobileStore/MobileReducer";
import TodoReducer from "./Store/Todo/TodoReducer";

const RootReducer=combineReducers({
    mobileReducer:MobileReducer,
    todoReducer:TodoReducer
})

export default RootReducer;