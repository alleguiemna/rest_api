import { applyMiddleware, compose, createStore } from "redux";
import userReducer from './reducer/userReducer';
import  thunk  from "redux-thunk"


const devtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(userReducer, compose(applyMiddleware(thunk), devtool))
export default store