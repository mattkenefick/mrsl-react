
import App from './Page/App/Index';
import React from 'react';
import ReactDOM from 'react-dom';


// Initialize
// -----------------------------------------------------------------------------

const structure =
    <React.StrictMode>
        <App name="MyApplication" />
    </React.StrictMode>
;

const element = document.querySelector('#root');

ReactDOM.render(structure, element);
