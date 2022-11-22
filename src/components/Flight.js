import React from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
export default function Flight() {
    return (
        <div>
            <div className='about'>
                <div className='container home-container-1'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h1 className='about-heading'>Choose anywhere<br />
                                you’d like to be</h1>
                            <h5 className='about-heading-1'>Lorem Ipsum dolor</h5>
                            <p className='about-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre henderit in voluptate velit esse.</p>
                            <h5 className='about-heading-1'>Lorem Ipsum dolor</h5>
                            <p className='about-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre henderit in voluptate velit esse.</p>
                        </div>
                        <div className='col-md-6'>
                            <Card.Img variant="top" src="./assets/images/about-image.png" />
                        </div>
                    </div>
                </div>
                <Card.Img variant="top" src="./assets/images/about-image-1.png" className='w-25' />
            </div>
            <div className='container mt-5 mb-5'>
                <div className='row'>
                    <div className='col-md-8'>
                        <h1 className='about2-heading'>Lorem ipsum dolor<br />
                            sit amet consectetur</h1>
                        <Accordion defaultActiveKey="0" className='accordion-1'>
                            <Accordion.Item eventKey="0" className='accordion-border-top' style={{ border: 'none', borderTop: '2px solid #232323', borderRadius: '0px', borderBottom: '2px solid #232323' }}>
                                <Accordion.Header className='plus'>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" style={{ border: 'none', borderRadius: '0px', borderBottom: '2px solid #232323' }}>
                                <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" style={{ border: 'none', borderRadius: '0px', borderBottom: '2px solid #232323' }}>
                                <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" style={{ border: 'none', borderRadius: '0px', borderBottom: '2px solid #232323' }}>
                                <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className='col-md-4'>
                        <Card.Img variant="top" src="./assets/images/about2-image.png" className='h-80' />
                    </div>
                </div>
            </div>
        </div>
    )
}
