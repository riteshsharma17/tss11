import React from 'react';
import ReactDOM from 'react-dom/client';
import Demo from './Demo';
import {BrowserRouter} from 'react-router-dom'
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
<Demo/>
</BrowserRouter>
);

