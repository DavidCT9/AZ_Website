import React from "react";
import { Button } from 'react-bootstrap';
import { ReactComponent as AZlogo } from "../img/AZLogo.svg";
import { ReactComponent as WhatsAppPushButton } from "../img/whatsapp-pushButton.svg";
import Calidad from "../img/Quality.gif";
import { Tooltip } from 'react-tooltip';
import OfficeModal from "./CatalogueModals/OfficeModal"
import {
    Magnifier,
    GlassMagnifier,
} from "react-image-magnifiers";



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

            <OfficeModal />

            <GlassMagnifier
                imageSrc={Calidad}
                imageAlt="Example"
                largeImageSrc={Calidad} // Optional
                style={{width:'10dvw'}}
            />





            <Magnifier style={{ width: '10dvw' }} imageSrc="https://c8.alamy.com/compes/b3nchm/un-hombre-vestido-con-el-indio-quechua-tejer-tradicional-sombrero-del-altiplano-peruano-b3nchm.jpg" />



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