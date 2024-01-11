import { ReactComponent as WhatsAppLogo } from "../img/Whats.svg";
import { ReactComponent as FacebookLogo } from "../img/Face.svg";
import { ReactComponent as InstagramLogo } from "../img/Insta.svg";
import {ReactComponent as AZlogo } from "../img/AZLogo.svg";


function Footer() {
    var year =new Date().getFullYear();

    return (
        <div  style={{backgroundColor:'black'}}>
            <div className="container" >
                <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4  mb-0">
                    <div className="col-md-4 mr-4 d-flex align-items-center justify-content-center ">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                            <AZlogo className="bi" width="40" height="40" />
                        </a>
                        <span className="mb-3 mb-md-0" style={{color:'white', fontSize:'large'}}>© {year} AZ Empresarial</span>
                    </div>

                    <ul className="nav justify-content-center mr-4">
                        <li className="nav-item footer-item"><a href="#" className="nav-link px-2 " style={{color:'white'}}>Inicio</a></li>
                        <li className="nav-item footer-item"><a href="#" className="nav-link px-2 " style={{color:'white'}}>Catalogo</a></li>
                        <li className="nav-item footer-item"><a href="#" className="nav-link px-2 " style={{color:'white'}}>Contacto</a></li>

                    </ul>


                    <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
                        <li className="ms-3"><a className="text-body-secondary" href="https://api.whatsapp.com/send?phone=3311662772" target="_blank" rel="noopener noreferrer"><WhatsAppLogo className="bi" width="24" height="24" /></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="#" target="_blank" rel="noopener noreferrer"><InstagramLogo className="bi" width="24" height="24" /></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="#" target="_blank" rel="noopener noreferrer"><FacebookLogo className="bi" width="26" height="26" /></a></li>
                    </ul>
                </footer>
            </div>

        </div>
    );
}

export default Footer;