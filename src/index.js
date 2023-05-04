import React from 'react';
import ReactDOM from 'react-dom/client';
import Inline from './components/InlineStyle';
import reportWebVitals from './reportWebVitals';

const root=ReactDOM.createRoot(document.getElementById("demo-app"));
root.render(
    <>
    <Inline />
    </>
);

reportWebVitals();