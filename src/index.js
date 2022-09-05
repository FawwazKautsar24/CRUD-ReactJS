import React from 'react';
import ReactDOM from 'react-dom/client';
import FoodNoteApp from './FoodNoteApp';

// import style
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <FoodNoteApp />
        {/* <NavbarComponent />
        <div className='container mt-4'>
            <TableComponent />
            <InputFormComponent />
        </div> */}
    </React.StrictMode>
);
