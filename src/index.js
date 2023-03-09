import React from 'react';
import { createRoot } from 'react-dom/client';
import picQr from './Images/image-qr-code.png';
import './index.css';



const App = () => {
    return (
        <div className='card'>
            <img src={picQr} alt="QR Code " width="288" height="288" />
            <h1>Improve your front-end skill by building projects</h1>
            <p> Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />,)