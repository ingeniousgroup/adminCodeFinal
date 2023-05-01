import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../reudux-config/adminSlice";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
function Siderbar(){
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const signOut =()=>{
     dispatch(signOut());
     <Navigate to="/"/>;
  }
return <nav className="sidebar sidebar-offcanvas" id="sidebar" style={{position:"fixed",marginTop:"70px"}}>
<ul className="nav">
  <li className="nav-item nav-profile">
    <a  className="nav-link">
      <div className="nav-profile-image">
        <img src="assets/images/faces/untitled.jpg" alt="profile" />
        <span className="login-status online" />
        {/*change to offline or busy as needed*/}
      </div>
      <div className="nav-profile-text d-flex flex-column">
        <span className="font-weight-bold mb-2" style={{color:"white"}}>David Grey. H</span>
        <span className="text-light text-small"> Admin</span>
      </div>
      <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" >
      <span className="menu-title "style={{color:"white"}}>Dashboard</span>
      <i className="mdi mdi-home menu-icon" />
    </a>
  </li>
  <li className="nav-item">
  </li>

  <li className="nav-item">
    <Link to="/viewOwner" className="nav-link">
      <span className="menu-title" style={{color:"white"}}>View Owners</span>
      <i className="mdi mdi-format-list-bulleted menu-icon" />
    </Link>
  </li>

  <li className="nav-item">
    <Link to="/viewCustomer" className="nav-link">
      <span className="menu-title" style={{color:"white"}}>View Customers</span>
      <i className="mdi mdi-format-list-bulleted menu-icon" />
    </Link>
  </li>

  <li className="nav-item">
    <Link to="/viewBalance" className="nav-link">
      <span className="menu-title" style={{color:"white"}}>View Balance</span>
      <i className="mdi mdi-format-list-bulleted menu-icon" />
    </Link>
  </li>
  <li className="nav-item">
    <Link to="/viewHouseRequest" className="nav-link">
      <span className="menu-title" style={{color:"white"}}>View House Request</span>
      <i className="mdi mdi-format-list-bulleted menu-icon" />
    </Link>
  </li>

  {/* <li className="nav-item">
    < Link  to ="/viewProfile"className="nav-link">
      <span className="menu-title" style={{color:"white"}}>View Profile</span>
      <i className="mdi mdi-chart-bar menu-icon" />
    </Link>
  </li> */}
  <li className="nav-item">
    < Link className="nav-link" to="/ChangePassword">
      <span className="menu-title" style={{color:"white"}}>Change Password</span>
      {/* <i className="mdi mdi-chart-bar menu-icon" /> */}
      <i className="mdi mdi-logout menu-icon text-primary" />
    </Link>
  </li>


  <li className="nav-item">
    < Link className="nav-link" onClick={signOut}>
      <span className="menu-title" style={{color:"white"}}>SignOut</span>
      {/* <i className="mdi mdi-chart-bar menu-icon" /> */}
      <i className="mdi mdi-logout menu-icon text-primary" />
    </Link>
  </li>


</ul>
</nav>

}
export default Siderbar;
