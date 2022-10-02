import {store} from "./redux/state";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
const render = (state) => {
    root.render(
        <BrowserRouter>
            <div
                className="min-h-[100vh] bg-slate-900 font-sans text-xl subpixel-antialiased text-[#fff] tracking-wider">
                <App state={store.getState()}
                     changeTextPost={store.changeTextPost.bind(store)}
                     addPost={store.addPost.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                     changeTextMessage={store.changeTextMessage.bind(store)}/>
            </div>
        </BrowserRouter>
    );
}

render(store.getState())

store.subscribe(render)