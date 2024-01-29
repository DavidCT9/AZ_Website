import React from "react";
import { Button } from 'react-bootstrap';
import { ReactComponent as AZlogo } from "../img/AZLogo.svg";
import { ReactComponent as WhatsAppPushButton } from "../img/whatsapp-pushButton.svg";
import Calidad from "../img/Quality.gif";
import { Tooltip } from 'react-tooltip'


function Catalogue() {

    return (
        <div>

            {/* -------------------------------- CATALOGO  ------------------------------------*/}


            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom" style={{ fontSize: '5dvh', fontWeight: '700', textAlign: 'center' }}>CATALOGO 2024</h2>

                {/*Primera fila */}

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" >
                    <div className="col">

                        <Button className='h-100 w-100 ' variant="" data-bs-toggle="modal" data-bs-target="#CatalogueItem1" style={{ padding: '0' }}>
                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${Calidad})` }}>
                                <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold " style={{ opacity: '70%' }}>Empresarial ejecutivo</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <AZlogo alt="Bootstrap" width="32" height="32" className="" ></AZlogo>
                                        </li>
                                        <li className="d-flex align-items-center me-3" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                            <small>California</small>
                                        </li>
                                        <li className="d-flex align-items-center" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                                            <small>5d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Button>

                    </div>


                    <div className="col">
                        <Button className='h-100 w-100' variant="" data-bs-toggle="modal" data-bs-target="#CatalogueItem1" style={{ padding: '0' }}>

                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-2.jpg')" }}>
                                <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ opacity: '70%' }}>Operativo y oficina</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <AZlogo alt="Bootstrap" width="32" height="32" className="" ></AZlogo>
                                        </li>
                                        <li className="d-flex align-items-center me-3" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                            <small>California</small>
                                        </li>
                                        <li className="d-flex align-items-center" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                                            <small>5d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Button>
                    </div>

                    <div className="col">
                        <Button className='h-100 w-100' variant="" data-bs-toggle="modal" data-bs-target="#CatalogueItem1" style={{ padding: '0' }}>

                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-3.jpg')" }}>
                                <div className="d-flex flex-column h-100 p-3 pb-1 text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ opacity: '70%' }}>Hotelería</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <AZlogo alt="Bootstrap" width="32" height="32" className="" ></AZlogo>
                                        </li>
                                        <li className="d-flex align-items-center me-3" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                            <small>California</small>
                                        </li>
                                        <li className="d-flex align-items-center" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                                            <small>5d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Button>
                    </div>
                </div>

                {/*Segunda fila */}

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" >
                    <div className="col">

                        <Button className='h-100 w-100' variant="" data-bs-toggle="modal" data-bs-target="#CatalogueItem1" style={{ padding: '0' }}>
                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${Calidad})` }}>
                                <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold " style={{ opacity: '70%' }}>Industria Alimenticia</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <AZlogo alt="Bootstrap" width="32" height="32" className="" ></AZlogo>
                                        </li>
                                        <li className="d-flex align-items-center me-3" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                            <small>California</small>
                                        </li>
                                        <li className="d-flex align-items-center" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                                            <small>5d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Button>

                    </div>


                    <div className="col">
                        <Button className='h-100 w-100' variant="" data-bs-toggle="modal" data-bs-target="#CatalogueItem1" style={{ padding: '0' }}>

                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-2.jpg')" }}>
                                <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ opacity: '70%' }}>Clínica</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <AZlogo alt="Bootstrap" width="32" height="32" className="" ></AZlogo>
                                        </li>
                                        <li className="d-flex align-items-center me-3" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                            <small>California</small>
                                        </li>
                                        <li className="d-flex align-items-center" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                                            <small>5d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Button>
                    </div>

                    <div className="col">
                        <Button className='h-100 w-100' variant="" data-bs-toggle="modal" data-bs-target="#CatalogueItem1" style={{ padding: '0' }}>

                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-3.jpg')" }}>
                                <div className="d-flex flex-column h-100 p-3 pb-1 text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ opacity: '70%' }}>Seguridad</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <AZlogo alt="Bootstrap" width="32" height="32" className="" ></AZlogo>
                                        </li>
                                        <li className="d-flex align-items-center me-3" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                            <small>California</small>
                                        </li>
                                        <li className="d-flex align-items-center" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                                            <small>5d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Button>
                    </div>
                </div>

                {/*Tercera fila */}


                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" >
                    <div className="col">

                        <Button className='h-100 w-100' variant="" data-bs-toggle="modal" data-bs-target="#CatalogueItem1" style={{ padding: '0' }}>
                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${Calidad})` }}>
                                <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold " style={{ opacity: '70%' }}>Agropecuario</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <AZlogo alt="Bootstrap" width="32" height="32" className="" ></AZlogo>
                                        </li>
                                        <li className="d-flex align-items-center me-3" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                            <small>California</small>
                                        </li>
                                        <li className="d-flex align-items-center" style={{ visibility: 'hidden' }}>
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


            {/* MODALS */}

            <div className="modal fade" id="CatalogueItem1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="10000">
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
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src="..." className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Second slide label</h5>
                                            <p>Some representative placeholder content for the second slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="..." className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Third slide label</h5>
                                            <p>Some representative placeholder content for the third slide.</p>
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



            {/*-------------------- C O L O R - G R I D  ----------------*/}

            <div className="container text-center">
                <div className="row justify-content-md-center">
                    <div className="col-sm">
                        <div data-tooltip-id="my-tooltip1"
                            data-tooltip-content="RED"
                            data-tooltip-place="top"
                            className="circle"
                            data-tip="Tooltip text"
                            style={{ backgroundColor: 'red' }}>
                            <Tooltip id="my-tooltip1" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                        </div>
                    </div>
                    <div className="col-sm">
                        <div data-tooltip-id="my-tooltip2"
                            data-tooltip-content="RED"
                            data-tooltip-place="top"
                            className="circle"
                            data-tip="Tooltip text"
                            style={{ backgroundColor: 'red' }}>
                            <Tooltip id="my-tooltip2" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                        </div>
                    </div>
                    <div className="col-sm">
                        <div data-tooltip-id="my-tooltip3"
                            data-tooltip-content="RED"
                            data-tooltip-place="top"
                            className="circle"
                            data-tip="Tooltip text"
                            style={{ backgroundColor: 'red' }}>
                            <Tooltip id="my-tooltip3" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                        </div>
                    </div>
                </div>
            </div>
            {/*-------------------- C O L O R - G R I D  ----------------*/}


            <a href="https://api.whatsapp.com/send?phone=3311662772" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
                <WhatsAppPushButton className="bi" />
            </a>
        </div>
    );
}

export default Catalogue;