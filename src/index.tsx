import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
// import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import App from "./containers/App";
import { searchCats, requestCats } from "./reducers";

// const logger = createLogger();

const rootReducer = combineReducers({ searchCats, requestCats });

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
