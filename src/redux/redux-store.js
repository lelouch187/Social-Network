import {
    combineReducers, legacy_createStore as createStore
} from "redux";
import sideBarReducer from "./side-bar-reducer";
import messagesPageReducer
    from "./messages-page-reducer";
import profilePageReducer
    from "./profile-page-reducer";

let reducers = combineReducers({
    sideBar: sideBarReducer,
    messagesPage: messagesPageReducer,
    profilePage: profilePageReducer,
})

let store = createStore(reducers)

export default store