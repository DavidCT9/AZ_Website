import {ReactComponent as AZlogo } from "../img/AZLogo.svg";


function Navbar() {
    return (
        <div>
            <header className="p-2 " style={{backgroundColor: 'black'}}>
                <div className="container">

                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" >
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                            <AZlogo className="bi me-2" width="40" height="40" />
                            <span className=" titleHeader  animatedItem" style={{ color: 'white', fontSize: 'x-large' }}>Empresarial</span>
                        </a>

                        <ul className=" titleHeader nav nav-underline justify-content-center  animatedItem" style={{marginLeft: '10%'}}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" style={{color: 'white'}}>Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#" style={{color: 'white'}}>Catalogo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#" style={{color: 'white'}}>Contacto</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </header>



        </div>
    );
}

export default Navbar;
