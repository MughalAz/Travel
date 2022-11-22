import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function About() {
    return (
        <>
            <div>
                <div className='container-fluid home-container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <Card.Img variant="top" src="./assets/images/contact-image.png" className='w-100 h-75' />
                        </div>
                        <div className='col-md-6'>
                            <h1 className='contact-heading'>Here’s what they<br />
                                have to say...</h1>
                        </div>
                        <div className='col-md-3'></div>
                    </div>
                </div>
                <div className='container'>
                    <Row xs={1} md={3} className="g-4">
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="./assets/images/contact-card-image.png" className='w-25 m-auto mt-5' />
                                    <Card.Body>
                                        <Card.Title className='text-center'>Customer Name</Card.Title>
                                        <Card.Text className='text-center pb-5'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incid idunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Card.Img variant="top" src="./assets/images/contact-image-1.png" style={{ float: 'right' }} className='w-25' />
                        </div>
                    </div>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <h1 className='contact-heading-1'>Be updated!</h1>
                            <Form className='mt-5'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="First Name*" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                    <Form.Control type="text" placeholder="Last Name*" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                    <Form.Control type="email" placeholder="Email Subject*" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={6} placeholder="Write something here..." />
                                </Form.Group>
                            </Form>
                            <Button variant="dark" className='w-100 mt-4 mb-3'>Submit Email</Button>
                        </div>
                        <div className='col-md-7'>
                            <Card.Img variant="top" src="./assets/images/contact-valley.png" className='h-75' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
