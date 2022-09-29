import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    addPost,
    changeTextPost
} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const render = (state) => {

    root.render(
        <BrowserRouter>
            <div
                className="min-h-[100vh] bg-slate-900 font-sans text-xl subpixel-antialiased text-[#fff] tracking-wider">
                <App state={state} changeTextPost={changeTextPost} addPost={addPost} />
            </div>
        </BrowserRouter>
    );
}

