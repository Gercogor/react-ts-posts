import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk"
import postsReducer from "./postsReducer";

let reducers = combineReducers({
    posts: postsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;