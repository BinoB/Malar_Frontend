// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Search from './Search';
// import { useDispatch, useSelector } from 'react-redux';
// import { Dropdown, Image } from 'react-bootstrap';
// import { logout } from '../../actions/userActions';
// import './Header.css';
// import menu from '../../display_image/menu.png';

// export default function Header() {
//   const { isAuthenticated, user } = useSelector(state => state.authState);
//   const { items: cartItems } = useSelector(state => state.cartState);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const logoutHandler = () => {
//     dispatch(logout);
//   };

//   const [showOffcanvas, setShowOffcanvas] = useState(false);
//   const offcanvasRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (offcanvasRef.current && !offcanvasRef.current.contains(event.target)) {
//         setShowOffcanvas(false);
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div>
//       <nav className="navbar row d-flex">
//         <div className="col-12 col-md-3">
//           <div>
//             <img width="30px" src={menu} alt="menu" className="menu-icon" onClick={() => setShowOffcanvas(!showOffcanvas)} />
//           </div>
//           <div className="navbar-brand d-flex">
//             <Link to="/">
//               <img width="50px" alt="Malarvilzhi Logo" src="/images/logo.png" />
//             </Link>
//             <span>
//               <p className="mb-0 ml-2 pt-2">Malar</p>
//             </span>
//           </div>
//         </div>

//         <div className="col-12 col-md-6 mt-2 mt-md-0">
//           <Search />
//         </div>

//         <div className="col-12 col-md-3 mt-4 mt-md-0 text-center d-flex">
//           {isAuthenticated ? (
//             <Dropdown className="d-inline">
//               <Dropdown.Toggle variant="default text-white pr-5" id="dropdown-basic">
//                 <figure className="avatar avatar-nav">
//                   <Image width="50px" src={user.avatar ?? './images/default_avatar.png'} />
//                 </figure>
//                 <span>{user.name}</span>
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 {user.role === 'admin' && (
//                   <Dropdown.Item onClick={() => navigate('admin/dashboard')} className="text-dark">
//                     Dashboard
//                   </Dropdown.Item>
//                 )}
//                 <Dropdown.Item onClick={() => navigate('/myprofile')} className="text-dark">
//                   Profile
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={() => navigate('/orders')} className="text-dark">
//                   Orders
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={logoutHandler} className="text-danger">
//                   Logout
//                 </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           ) : (
//             <Link to="/login" className="btn" id="login_btn">
//               Login
//             </Link>
//           )}
//           <Link to="/cart">
//             <span id="cart" className="ml-3">
//               Cart
//             </span>
//           </Link>
//           <span className="ml-1" id="cart_count">
//             {cartItems.length}
//           </span>
//         </div>
//       </nav>
//       <div ref={offcanvasRef} className={`offcanvas ${showOffcanvas ? 'show' : ''}`}>
//         <div className="offcanvas-header">
//           {/* <h5 className="offcanvas-title">Offcanvas</h5> */}
//           <button type="button" className="btn-close d-flex justify-content-end" onClick={() => setShowOffcanvas(false)}></button>
//         </div>
//         <div className="offcanvas-body">
//           <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end">
//             <li className="nav-item">
//               <a className="nav-link" href="#action1">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#action2">
//                 Link
//               </a>
//             </li>

//           </ul>
//           <form className="d-flex">
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { DropdownButton, Dropdown, Image } from "react-bootstrap";
import { logout } from "../../actions/userActions";
import "./Header.css";
import menu from "../../display_image/menu.png";

export default function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.authState);
  const { items: cartItems } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout);
  };

  return (
    <nav className="navbar row d-flex">
      <div className="col-12 col-md-3">
        <div>
          {/* <img width='30px' src={menu} alt="menu" className="menu-icon" /> */}
        </div>
        <div className="navbar-brand d-flex">
          <Link to="/">
            <img width="50px" alt="Malarvilzhi Logo" src="/images/logo.png" />
          </Link>
          <span className="logo_name">
            <Link to="/">
              <p className="mb-0 ml-2 pt-2">Malarvilzhi</p>
            </Link>
          </span>
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <Search />
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center d-flex">
        {isAuthenticated ? (
          <Dropdown className="d-inline">
            <Dropdown.Toggle
              variant="default text-white pr-5"
              id="dropdown-basic"
            >
              <figure className="avatar avatar-nav">
                <Image
                  width="50px"
                  src={user.avatar ?? "./images/default_avatar.png"}
                />
              </figure>
              <span className="username">{user.name}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {user.role === "admin" && (
                <Dropdown.Item
                  onClick={() => {
                    navigate("admin/dashboard");
                  }}
                  className="text-dark"
                >
                  Dashboard
                </Dropdown.Item>
              )}
              <Dropdown.Item
                onClick={() => {
                  navigate("/myprofile");
                }}
                className="text-dark"
              >
                Profile
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  navigate("/orders");
                }}
                className="text-dark"
              >
                Orders
              </Dropdown.Item>
              <Dropdown.Item onClick={logoutHandler} className="text-danger">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Link to="/login" className="btn" id="login_btn">
            Login
          </Link>
        )}
        <Link to="/cart">
    <span id="cart" className="ml-3" style={{ paddingTop: '10px' }}>
        Cart
    </span>
</Link>

        <span className="ml-1" id="cart_count">
          {cartItems.length}
        </span>
      </div>
    </nav>
  );
}
