import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../reudux-config/adminSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const { currentAdmin } = useSelector(state => state.admin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adminSignout = () => {
    dispatch(signOut());
    navigate("/");
  }
  return <nav className=" navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div className="text-center  navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <a className="navbar-brand brand-logo" >
        <span bg-info style={{ fontWeight: "bolder",fontStyle:"sans-serif ",color:'white'}}>KirayaWala</span>
      </a>
      <a className="navbar-brand brand-logo-mini" href="index.html">
        <img src="assets/images/logo-mini.svg" alt="logo" />
      </a>
    </div>
    <div className="navbar-menu-wrapper d-flex align-items-stretch">
      <button
        className="navbar-toggler navbar-toggler align-self-center "
        type="button"
        data-toggle="minimize"
      >
        <span className="mdi mdi-menu" style={{color:"white"}} />
      </button>
      <div className="search-field d-none d-md-block">
        <form className="d-flex align-items-center h-100" action="#">
          <div className="input-group">
            <div className="input-group-prepend bg-transparent">
              <i className="input-group-text border-0 mdi mdi-magnify" style={{color:"white"}} />
            </div>
            <input
              type="text"
              className="form-control bg-white border-0"
              placeholder="Search here"
            />
          </div>
        </form>
      </div>
      <ul className="navbar-nav navbar-nav-right">
        <li className="nav-item dropdown ">
          <a
            className="nav-link count-indicator dropdown-toggle"
            id="notificationDropdown"
            href="#"
            data-bs-toggle="dropdown"
          >
            <i className="mdi mdi-bell-outline " style={{color:"white"}} />
            <span className="count-symbol bg-danger"style={{height:'15px',width:"15px",color:"white",fontSize:"8px",textAlign:"center"}} >2</span>
          </a>
        </li>
        <li className="nav-item nav-profile dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="profileDropdown"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="nav-profile-img">
              <img src="assets/images/faces/untitled.jpg" alt="image" />
              <span className="availability-status online" />
            </div>
            <div className="nav-profile-text">
              <p className="mb-1 text-white" style={{fontSize:'20px'}}>Admin</p>
            </div>
          </a>
          <div
            className="dropdown-menu navbar-dropdown"
            aria-labelledby="profileDropdown"
          >
           {!currentAdmin&& <Link to="/signUp" className="dropdown-item" >
              <i className="mdi mdi-cached me-2 text-success" /> SignUp
            </Link>}

            {!currentAdmin && <Link to="/signIn" className="dropdown-item" href="#">
              <i className="mdi mdi-cached me-2 text-success" /> SignIn
            </Link>
            }
            <div className="dropdown-divider" />
            {currentAdmin && <button className="dropdown-item" onClick={adminSignout}>
              <i className="mdi mdi-logout me-2 text-primary" /> Signout{" "}
            </button>
            }
          </div>
        </li>


      </ul>

    </div>
  </nav>

}
export default Navbar;