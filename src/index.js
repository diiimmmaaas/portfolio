import React from 'react';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.Fragment>
        <App />
    </React.Fragment>
);

reportWebVitals();
