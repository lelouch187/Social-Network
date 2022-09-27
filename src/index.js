import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const postsData = [
    {id: 1, message: "Го доту", likesCount: 6},
    {id: 2, message: "Привет", likesCount: 2},
]
const dialogsData = [
    {name:"Иван", id: 1},
    {name:"Александр", id: 2},
    {name:"Захар", id: 3}
]
const messagesData = [
    {message:"Привет", id:1},
    {message:"Дота?", id:2}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div
        className="min-h-[100vh] bg-slate-900 font-sans text-xl subpixel-antialiased text-[#fff] tracking-wider">
        <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
    </div>
);
