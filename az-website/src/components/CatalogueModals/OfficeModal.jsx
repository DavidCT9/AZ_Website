import React from "react";
import Calidad from "../../img/Quality.gif";
import Per from "../../img/Personalization.gif";

import { Tooltip } from 'react-tooltip';
import {
    Magnifier,
    GlassMagnifier,
} from "react-image-magnifiers";


function OfficeModal() {
    return (
        <div>

            {/* MODALS */}

            <div className="modal fade" id="CatalogueItem1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <h1 className="modal-title fs-4" id="exampleModalLabel" style={{ fontWeight: '700' }}>Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            {/* ------------------- MODAL CAROUSEL --------------------*/}

                            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8" aria-label="Slide 9"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="9" aria-label="Slide 10"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="10" aria-label="Slide 11"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="11" aria-label="Slide 12"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="12" aria-label="Slide 13"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="13" aria-label="Slide 14"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="14" aria-label="Slide 15"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="15" aria-label="Slide 16"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="16" aria-label="Slide 17"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="17" aria-label="Slide 18"></button>

                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="10000">
                                    <GlassMagnifier
                                            imageSrc={Per}
                                            imageAlt="Example"
                                            largeImageSrc={Per} // Optional
                                            className="d-block w-100 h-100"
                                        />                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '50px', textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>Colores Disponibles</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip1"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip2"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip3"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip4"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip4" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip5"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip5" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="2000">
                                    <img src={Calidad} className="d-block w-100 h-100" alt="..." />

                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '50px', textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>Colores Disponibles</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip1"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip2"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip3"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip4"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip4" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip5"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip5" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="3000">
                                        <img src={Calidad} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '50px', textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>Colores Disponibles</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip1"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip2"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip3"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip4"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip4" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip5"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip5" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="4000">
                                        <img src={Calidad} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '50px', textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>Colores Disponibles</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip1"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip2"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip3"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip4"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip4" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip5"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip5" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="5000">
                                        <img src={Calidad} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '50px', textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>Colores Disponibles</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip1"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip2"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip3"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip4"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip4" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip5"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip5" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="6000">
                                        <img src={Calidad} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '50px', textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>Colores Disponibles</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip1"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip2"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip3"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip4"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip4" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip5"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip5" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="7000">
                                        <img src={Calidad} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '50px', textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>Colores Disponibles</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip1"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip2"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip3"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip4"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip4" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip5"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip5" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="8000">
                                        <img src={Calidad} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '50px', textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>Colores Disponibles</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip1"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip2"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip3"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip4"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip4" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip5"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip5" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="9000">
                                        <img src={Calidad} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '50px', textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>Colores Disponibles</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip1"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip2"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip3"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip4"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip4" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip5"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip5" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="10000">
                                        <img src={Calidad} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '50px', textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>Colores Disponibles</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip1"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip2"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip3"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip4"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip4" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip5"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip5" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="11000">
                                        <img src={Calidad} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '50px', textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>Colores Disponibles</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip1"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip2"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip3"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip4"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip4" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip5"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip5" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="12000">
                                        <img src={Calidad} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '50px', textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>Colores Disponibles</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip1"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip2"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip3"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip4"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip4" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip5"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip5" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="13000">
                                        <img src={Calidad} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '50px', textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>Colores Disponibles</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip1"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip2"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip3"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip4"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip4" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip5"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip5" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="14000">
                                        <img src={Calidad} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '50px', textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>Colores Disponibles</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip1"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip2"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip3"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip4"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip4" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip5"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip5" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="15000">
                                        <img src={Calidad} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '50px', textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>Colores Disponibles</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip1"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip2"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip3"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip4"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip4" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip5"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip5" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="16000">
                                        <img src={Calidad} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '50px', textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>Colores Disponibles</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip1"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip2"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip3"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip4"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip4" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip5"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip5" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="17000">
                                        <img src={Calidad} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '50px', textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>Colores Disponibles</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip1"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip2"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip3"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip4"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip4" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip5"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip5" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="18000">
                                        <img src={Calidad} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '50px', textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>Colores Disponibles</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip1"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip2"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip3"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip4"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip4" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="my-tooltip5"
                                                            data-tooltip-content="RED"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="my-tooltip5" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>

                                </div>


                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>

                            </div>

                            {/* ------------------- MODAL CAROUSEL --------------------*/}



                        </div>
                        <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                            <button type="button" className="btn btn-lg btn-outline-dark rounded-pill" data-bs-dismiss="modal" style={{ fontWeight: '500' }}>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODALS */}

        </div>
    );
}

export default OfficeModal;