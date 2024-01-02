import { ReactComponent as FacebookLogo } from "../img/facebook-svgrepo-com.svg";

function Navbar() {
    return (
        <div>
            <header className="p-3 text-bg-dark">
                <div className="container">

                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                            <FacebookLogo className="bi me-2" width="40" height="32" />
                            <span className="fs-5" style={{ color: 'white', fontFamily: "roboto"  }}>AZ Empresarial</span>
                        </a>

                        <ul className="nav nav-underline justify-content-center" style={{fontSize: "large", fontWeight: 'bold', fontFamily: "roboto"}}>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#" style={{color: 'white'}}>Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{color: 'white'}}>Catalogo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{color: 'white'}}>Contacto</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </header>



        </div>
    );
}

export default Navbar;
