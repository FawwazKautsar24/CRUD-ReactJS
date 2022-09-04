import React from 'react';
import ReactDOM from 'react-dom/client';
import NavbarComponent from './NavbarComponent';
import Crud from './Crud';
import TableComponent from './TableComponent';
import InputFormComponent from './InputFormComponent';

// import style
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <NavbarComponent />
        <div className='container mt-4'>
            <TableComponent />
            <InputFormComponent />
        </div>
    </React.StrictMode>
);
