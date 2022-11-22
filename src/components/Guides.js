import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export default function Guides() {
    return (
        <>
            <div className='container mb-5 home-container'>
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Col>
                            <>
                                <Card.Img variant="top" src="./assets/images/guide-image-1.png" />
                                <Card.Body>
                                    <Card.Title className='py-4' style={{ color: '#232323', fontSize: '30px', width: '200px', fontWeight: 'bold', fontFamily: 'Cardo-Bold' }}><span className='lor'>Lor</span>em ipsum
                                        dolor sit amet</Card.Title>
                                    <Card.Text className='' style={{ color: '#232323', fontSize: '14px' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.
                                    </Card.Text>
                                </Card.Body>
                            </>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className='aeroplain'>
                <div className='container mb-5'>
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-8'>
                            <div className='m-auto'>
                                <Card.Img variant="top" src="./assets/images/plain.png" className="d-block mx-auto img plain" />
                            </div>
                            <h2 className='flight-heading'>See places you’ve<br />
                                <span className='never'>never</span> been before</h2>
                            <p className='flight-para'>Lorem Ipsum Dolor | Lorem Ipsum Dolor | Lorem Ipsum Dolor</p>
                        </div>
                        <div className='col-md-2'>
                        </div>
                        <Card.Img variant="top" src="./assets/images/flight-image.png" className="img w-50" />
                    </div>
                </div>
            </div>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Card.Img variant="top" src="./assets/images/valley-image-1.png" />
                    </div>
                    <div className='col-md-6'>
                        <Card.Img variant="top" src="./assets/images/valley-image-2.png" className='w-75 mt-2' />
                        <div className='row'>
                            <div className='col-md-5'>
                                <h2 className='flight-heading-1'><span className='flight-heading-2'>Lorem ipsum
                                    dolor sit amet
                                    consectetur
                                    adipiscing elit
                                    sed do ei</span></h2>
                            </div>
                            <div className='col-md-7'>
                                <p className='flight-para-2'>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                </p>
                                <p className='flight-para-3'>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                </p>
                                <p className='arrow ms-auto'>&rarr;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
