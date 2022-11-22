import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home() {
    return (
        <div className='home-page'>
            <div className='container mb-5 home-container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2 className='home-heading'>Travel to<br />
                            your dream<br />
                            destination</h2>
                        <p className='home-para'>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida. </p>
                        <Button variant="dark" className='home-btn'>Reserve Ticket</Button>
                    </div>
                    <div className='col-md-6'>
                        <Card.Img variant="top" src="./assets/images/home-image.png" />
                    </div>
                </div>
            </div>
            <div className='guide'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <Card.Img variant="top" src="./assets/images/home-image-left.png" className='mt-5' />
                        </div>
                        <div className='col-md-4'>
                            <h3 className='guide-heading'>Create a memory
                                to remember</h3>
                            <p className='guide-para'>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida. </p>
                            <div classNamre='btn-guide' style={{ textAlign: 'center' }}>
                                <Button variant="outline-secondary" className='guide-btn px-5 text-white' style={{ border: '2px solid #fff' }}>My Travel Logs</Button>{' '}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <Card.Img variant="top" src="./assets/images/home-image-right.png" className='guide-image' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
