import CartWidget from "../CartWidget/CartWidget";
import "../Navbar/Navbar.css";

function nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary d-flex justify-content-between align-items-center ">
      <div className="d-flex">
        <a className="navbar-brand" href="#">
          GE Gadget Expirience
        </a>
        
        <div>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Celulares
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Auriculares
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Camaras
              </a>
            </li>
          </ul>
        </div>

      </div>
        <div className="nav-icon">
          <CartWidget />
        </div>
    </nav>
  );
}

export default nav;
