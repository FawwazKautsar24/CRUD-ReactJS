import React from 'react';
import { Table } from 'react-bootstrap';

class TableComponent extends React.Component{
    render(){

        // console.log('Data-3: ', this.props);
        // console.log('Data-3b: ', this.props.foodName);
        // console.log('Data-4: ', this.props.foods);
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nama Makanan</th>
                        <th>Deskripsi</th>
                        <th>Harga</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.foods.map((food, i) => {
                        return (
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{food.foodName}</td>
                                <td>{food.foodDescription}</td>
                                <td>Rp. {food.foodPrice}</td>
                                <td>
                                    <button className="btn btn-warning mr-2" onClick={() => {this.props.editData(food.id)}}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => {this.props.deleteData(food.id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                </Table>
        );
    }
}

export default TableComponent;
