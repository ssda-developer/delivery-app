import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from './context/StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <StoreProvider>
            <App/>
        </StoreProvider>
    </BrowserRouter>
);

reportWebVitals();
