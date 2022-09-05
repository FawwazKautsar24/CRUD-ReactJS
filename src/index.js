import React from 'react';
import ReactDOM from 'react-dom/client';
import NavbarComponent from './NavbarComponent';
import InputFormComponent from './InputFormComponent';
import TableComponent from './TableComponent';

// import style
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <NavbarComponent />
        <div className='container mt-4'>
            <InputFormComponent />
            {/* <TableComponent /> */}
        </div>
    </React.StrictMode>
);
