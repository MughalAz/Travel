import React from 'react'
import Card from 'react-bootstrap/Card';
export default function Footer() {
    return (
        <div className='footer'>
            <div className='container pt-5 pb-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <h1 className='footer-heading'>My Log
                            Travels</h1>
                    </div>
                    <div className='col-md-9'>
                        <h5 className='footer-heading-1'>Quick Links</h5>
                        <div className='row pt-3'>
                            <div className='col-md-3'>
                                <h5 className='footer-heading-2'>Home</h5>
                                <h5 className='footer-heading-2'>About Us</h5>
                                <h5 className='footer-heading-2'>My Travel Logs</h5>
                            </div>
                            <div className='col-md-3'>
                                <h5 className='footer-heading-2'>Travels</h5>
                                <h5 className='footer-heading-2'>Promo Flights</h5>
                                <h5 className='footer-heading-2'>Travel Routes</h5>
                            </div>
                            <div className='col-md-3'>
                                <h5 className='footer-heading-2'>Recommendation</h5>
                                <h5 className='footer-heading-2'>Guides</h5>
                                <h5 className='footer-heading-2'>Blogs</h5>
                            </div>
                            <div className='col-md-3'>
                                <h5 className='footer-heading-2'>Mission Statements</h5>
                                <h5 className='footer-heading-2'>The Team</h5>
                                <h5 className='footer-heading-2'>Contact Us</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Card.Img variant="top" src="./assets/images/footer-image.png" className='' />
                    </div>
                    <div className='col-md-9'>
                        <p className='footer-para'>2021 - 2022 My Log Travels. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
