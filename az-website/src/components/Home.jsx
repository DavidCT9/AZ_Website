import React, { useState, useEffect } from 'react';

import { ReactComponent as MobileItem1 } from '../img/1.svg'
import { ReactComponent as MobileItem2 } from '../img/2.svg'
import { ReactComponent as MobileItem3 } from '../img/3.svg'

import { ReactComponent as PCItem1 } from '../img/PC1.svg'
import { ReactComponent as PCItem2 } from '../img/PC2.svg'
import { ReactComponent as PCItem3 } from '../img/PC3.svg'

import { ReactComponent as WhatsAppPushButton } from "../img/whatsapp-pushButton.svg";
import { ReactComponent as EnterpriseMen } from '../img/EnterpriseMen.svg';

import { ReactComponent as AZlogo } from "../img/AZLogo.svg";

import Calidad from "../img/Quality.gif"
import Personalizacion from "../img/Personalization.gif"
import Asesoramiento from "../img/Consulting.gif"


import { Button, Modal } from 'react-bootstrap';




function Home() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);




    return (
        <div style={{}}>

            <div id="myCarousel" className="carousel slide mb-6 pointer-event" data-bs-ride="carousel" style={{ boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)' }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        {isMobile ? <MobileItem1 className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></MobileItem1>
                            : <PCItem1 className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></PCItem1>}

                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Bienvenido a AZ empresarial</h1>
                                <p className="opacity-75">Conoce a la empresa mexicana que le dara identidad a tu empresa mediante el uniforme.</p>
                                <p><a className="btn btn-lg btn-outline-light rounded-pill" href="#ID">Conocenos</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        {isMobile ? <MobileItem2 className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></MobileItem2>
                            : <PCItem2 className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></PCItem2>}
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Contamos con un extenso catalogo</h1>
                                <p>Nuestra empresa diseña y fabrica uniformes personalizados diferentes industrias y cubriendo los requisitos de estas. </p>
                                <p><a className="btn btn-lg btn-outline-light rounded-pill" href="#">Conocelo Aqui</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {isMobile ? <MobileItem3 className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></MobileItem3>
                            : <PCItem3 className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></PCItem3>}
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>Viste y personaliza a tu empresa</h1>
                                <p>Contactanos para hacer sus uniformes a la medida, personalizados y a su gusto</p>
                                <p><a className="btn btn-lg btn-outline-light rounded-pill" href="#">Mandanos un mensaje</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="element row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-5  shadow-lg" style={{ margin: "3dvw", backgroundColor: 'white', boxShadow: '50px 10px 10px rgba(0, 0, 0, 0.5)' }} id='ID'>
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3" style={{}}>
                    <h5 className="mb-4 display-4 lh-1 " style={{ fontWeight: '600', color: 'black' }}>Nuestra Identidad</h5>
                    <p className="lead" style={{ fontWeight: '400', color: '#636363' }}><em>Somos AZ empresarial, una prestigiosa organización con una <strong> trayectoria de 15 años en la creación y diseño de uniformes empresariales. </strong>Nuestro enfoque se centra en el desarrollo de soluciones a medida, diseñadas específicamente para satisfacer las necesidades únicas de cada uno de nuestros socios y clientes.</em></p>

                </div>
                <div className="col-lg-3 offset-lg-1 p-0 overflow-hidden " style={{ textAlign: 'center' }}>
                    <EnterpriseMen className="rounded-lg-3 mb-3" style={{ width: "200px", height: '200px' }}></EnterpriseMen>
                </div>
            </div>

            <div className="container px-4 py-5" id="featured-3">
                <h1 className="pb-2 border-bottom" style={{ fontWeight: '700', fontStyle: 'bold', textAlign: 'center' }}>NUESTRAS CARACTERÍSTICAS</h1>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3" style={{ alignContent: 'center' }}>
                            <img src={Personalizacion} alt='Personalization' className="bi" />
                        </div>
                        <h3 className="fs-2 text-body-emphasis" style={{ alignItems: 'center', textAlign: 'center' }}><em>Flexibilidad y personalización</em></h3>
                        <p style={{ color: '#636363' }}>En nuestra empresa, nos destacamos por ofrecer un servicio de personalización y fabricación de uniformes empresariales. Nos caracteriza nuestra flexibilidad para adaptarnos a las necesidades de cada empresa, asegurando que cada uniforme refleje su identidad única y cumpla con sus requisitos específicos.</p>

                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
                            <img src={Calidad} className="quality-icon" />
                        </div>
                        <h3 className="fs-2 text-body-emphasis" style={{ alignItems: 'center', textAlign: 'center' }}><em>Calidad</em> </h3>
                        <p style={{ color: '#636363' }}>En AZ Empresarial, ofrecemos uniformes empresariales de alta calidad, hechos a medida con atención meticulosa al detalle, garantizando durabilidad, comodidad y sofisticación para representar a tu empresa de la mejor manera.</p>

                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
                            <img src={Asesoramiento} className="bi" />
                        </div>
                        <h3 className="fs-2 text-body-emphasis" style={{ alignItems: 'center', textAlign: 'center' }}><em>Asesoría de imagen empresarial</em></h3>
                        <p style={{ color: '#636363' }}>Nosotros nos identificamos por brindar una asesoría integral en imagen empresarial, guiando a nuestros clientes en cada paso del proceso de venta para garantizar uniformes que se ajusten a sus necesidades y reflejen su identidad corporativa de manera óptima.</p>

                    </div>
                </div>
            </div>


            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is a vertically centered modal.</Modal.Body>
                <Modal.Footer>
                    <Button variant="btn btn-dark rounded-pill" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom" style={{ fontSize: '5dvh', fontWeight: '700', textAlign: 'center' }}>CATALOGO 2024</h2>

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" >
                    <div className="col">

                        <Button className='h-100 w-100' variant="" onClick={handleShow} data-bs-toggle="modal" data-bs-target="#CatalogueItem1" style={{ padding: '0' }}>
                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${Calidad})` }}>
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold " style={{ opacity: '60%' }}>Short title, long jacket</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <AZlogo alt="Bootstrap" width="32" height="32" className="" ></AZlogo>
                                        </li>
                                        <li className="d-flex align-items-center me-3">
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                            <small>Earth</small>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                                            <small>3d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Button>

                    </div>


                    <div className="col">
                        <Button className='h-100 w-100' variant="" onClick={handleShow} data-bs-toggle="modal" data-bs-target="#CatalogueItem1" style={{ padding: '0' }}>

                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-2.jpg')" }}>
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <AZlogo alt="Bootstrap" width="32" height="32" className="" ></AZlogo>
                                        </li>
                                        <li className="d-flex align-items-center me-3">
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                            <small>Pakistan</small>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                                            <small>4d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Button>
                    </div>

                    <div className="col">
                        <Button className='h-100 w-100' variant="" onClick={handleShow} data-bs-toggle="modal" data-bs-target="#CatalogueItem1" style={{ padding: '0' }}>

                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-3.jpg')" }}>
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <AZlogo alt="Bootstrap" width="32" height="32" className="" ></AZlogo>
                                        </li>
                                        <li className="d-flex align-items-center me-3">
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                            <small>California</small>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                                            <small>5d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Button>
                    </div>
                </div>



            </div>



            <a href="https://api.whatsapp.com/send?phone=3311662772" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
                <WhatsAppPushButton className="bi" />
            </a>
        </div>
    );
}

export default Home;
