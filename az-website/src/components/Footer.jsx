import { ReactComponent as WhatsAppLogo } from "../img/whatsapp-svgrepo-com.svg";
import { ReactComponent as FacebookLogo } from "../img/facebook-svgrepo-com.svg";
import { ReactComponent as InstagramLogo } from "../img/instagram-svgrepo-com.svg";

function Footer() {
    var year =new Date().getFullYear();

    return (
        <div>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 mr-4 d-flex align-items-center justify-content-center ">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                            <WhatsAppLogo className="bi" width="30" height="24" />
                        </a>
                        <span className="mb-3 mb-md-0 text-body-secondary">© {year} AZ Empresarial</span>
                    </div>

                    <ul className="nav justify-content-center mr-4">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Inicio</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Catalogo</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contacto</a></li>

                    </ul>


                    <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
                        <li className="ms-3"><a className="text-body-secondary" href="#"><WhatsAppLogo className="bi" width="24" height="24" /></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="#"><InstagramLogo className="bi" width="24" height="24" /></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="#"><FacebookLogo className="bi" width="24" height="24" /></a></li>
                    </ul>
                </footer>
            </div>

        </div>
    );
}

export default Footer;