/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Gui from './gui';
import './gui.css';

ReactDOM.createRoot(document.getElementById('gui')!).render(
    <React.StrictMode>
        <Gui />
    </React.StrictMode>,
);
