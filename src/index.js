import store from "./redux/redux-store";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import './index.css'
import {Provider} from "react-redux";



const root = ReactDOM.createRoot(document.getElementById('root'));
const render = () => {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );
}

render()

store.subscribe(() => {
    render()
})