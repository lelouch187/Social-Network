import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div
        className="min-h-[100vh] bg-slate-900 font-sans text-xl subpixel-antialiased text-[#fff] tracking-wider">
        <App state={state} />
    </div>
);
