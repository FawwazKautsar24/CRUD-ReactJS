import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

class InputFormComponent extends React.Component{
    render(){
        // console.log('Data-2: ', this.state.foods);
        console.log(this.props.foodName)
        return (
            <div>
                <Row>
                    <Col>
                        <h4>Tambah Data</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Nama Makanan</Form.Label>
                                <Form.Control type="text" name="foodName" value={this.props.foodName} onChange={(event) => this.onNamaMakananChangeEventHandler(event)} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Deskripsi</Form.Label>
                                <Form.Control as="textarea" rows={3} name="foodDescription" value={this.props.deskripsiMakanan} onChange={(event) => this.handleChange(event)} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Harga Makanan</Form.Label>
                                <Form.Control type="number" name="foodPrice" value={this.props.foodPrice} onChange={(event) => this.handleChange(event)} />
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
