import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

class InputFormComponent extends React.Component{
    render(){
        return (
            <div>
                <Row>
                    <Col>
                        <h4>Tambah Data</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Nama Makanan</Form.Label>
                                <Form.Control type="text" name="foodName" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Deskripsi</Form.Label>
                                <Form.Control as="textarea" rows={3} name="foodDescription" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Harga Makanan</Form.Label>
                                <Form.Control type="number" name="foodPrice" />
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
