import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import TableComponent from './TableComponent';

class InputFormComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            foods: [],
            id: '',
            foodName: '',
            foodDescription: '',
            foodPrice: '',
            startCountId: 1
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: [event.target.value],
        });
    }
    
    handleSubmit = (event) => {
        // mencegah terjadinya reload setelah klik submit
        event.preventDefault();
        
        // this.props.addNote(this.state);
        // console.log('Data-1 (input): ', this.state);
        const selainMakananYangDiEdit = this.state.foods
            .filter((food) => food.id !== this.state.id)
            .map((filteredFood) => {
                return filteredFood;
            });
        
        // console.log('Selain yang di-edit: ', selainMakananYangDiEdit);
            
        if(this.state.id){
            // jika sudah terdapat Data / ID
            this.setState({
                foods: [
                    ...selainMakananYangDiEdit,
                    {
                        // Data yang di-edit akan tetap memiliki ID yang sama
                        id: this.state.id,
                        foodName: this.state.foodName,
                        foodDescription: this.state.foodDescription,
                        foodPrice: this.state.foodPrice,
                    }
                ]
            });
        }else{
            // jika belum terdapat Data / ID, maka akan membuat Data baru
            this.setState({
                foods: [
                    ...selainMakananYangDiEdit,
                    {
                        // id: this.state.foods.length+1,
                        id: this.state.startCountId++,
                        foodName: this.state.foodName,
                        foodDescription: this.state.foodDescription,
                        foodPrice: this.state.foodPrice,
                    }
                ]
            });
        }

        // form isian kembali di reset, setalah enter / klik submit
        this.setState({
            id: '',
            foodName: '',
            foodDescription: '',
            foodPrice: '',
        });
    }

    editData = (id) => {
        const showEditedFood = this.state.foods
            .filter((food) => food.id === id)
            .map((filteredFood) => {
                return filteredFood
            });

        this.setState({
            id: showEditedFood[0].id,
            foodName: showEditedFood[0].foodName,
            foodDescription: showEditedFood[0].foodDescription,
            foodPrice: showEditedFood[0].foodPrice,
        });
        // console.log(showEditedFood);
    }

    deleteData = (id) => {
        const selainMakananYangDiDelete = this.state.foods
            .filter((food) => food.id !== id)
            .map((filteredFood) => {
                return filteredFood;
            });
        
        this.setState({
            foods: [
                ...selainMakananYangDiDelete,
            ]
        });
    }
    
    render(){
        // console.log('Data-2 (state): ', this.state.foods);
        return (
            <div>
                <TableComponent foods={this.state.foods} editData={this.editData} deleteData={this.deleteData} />
                <Row>
                    <Col>
                        <h4>{this.state.id ? 'Ubah Data' : 'Tambah Data'}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={(event) => this.handleSubmit(event)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Nama Makanan</Form.Label>
                                <Form.Control type="text" name="foodName" value={this.state.foodName} onChange={(event) => this.handleChange(event)} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Deskripsi</Form.Label>
                                <Form.Control as="textarea" rows={3} name="foodDescription" value={this.state.foodDescription} onChange={(event) => this.handleChange(event)} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Harga Makanan</Form.Label>
                                <Form.Control type="number" name="foodPrice" value={this.state.foodPrice} onChange={(event) => this.handleChange(event)} />
                            </Form.Group>
                            <Button className="mt-4 float-right" variant="secondary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default InputFormComponent;
