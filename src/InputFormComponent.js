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
        // console.log('Data-1: ', this.state);
        this.setState({
            foods: [
                ...this.state.foods,
                {
                    id: this.state.foods.length+1,
                    foodName: this.state.foodName,
                    foodDescription: this.state.foodDescription,
                    foodPrice: this.state.foodPrice,
                }
            ]
        });

        // form isian kembali di reset, setalah enter / klik submit
        this.setState({
            id: '',
            foodName: '',
            foodDescription: '',
            foodPrice: '',
        });
    }

    render(){
        // console.log('Data-2: ', this.state.foods);
        return (
            <div>
                <TableComponent foods={this.state.foods} />
                <Row>
                    <Col>
                        <h4>Tambah Data</h4>
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
                            <Button variant="primary" type="submit">
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
