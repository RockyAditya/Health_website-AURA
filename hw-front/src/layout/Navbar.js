import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  // Check if the current route is '/starthome' for Login and Signup buttons
  const showAuthButtons = location.pathname === '/' || location.pathname === '/starthome';

  // Check if the current route is '/admin' for Add User button
  const showAddUserButton = location.pathname === '/admin';

  // Check if the current route is '/horigin' for Logout button and additional links
  const showLogoutButtons = location.pathname === '/horigin';

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
        <div className="container-fluid">
          {/* Brand name */}
          <Link className="navbar-brand" to="/" style={{ fontFamily: 'Oxygen', color: '#000', opacity: '1.0' }}>
            <h3>AURA</h3>
            <h6>ONLINE HEALTH APPOINTMENT</h6>
          </Link>

          {/* Navbar Toggler for mobile view */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Empty ul to separate the brand name from buttons */}
            <ul className="navbar-nav me-auto"></ul>

            {/* Render Logout button and additional links only on /horigin */}
            {showLogoutButtons && (
              <>
                
                <Link to="/horigin" className="btn me-2">Home</Link>
                <a href="#services" className="btn me-2">Services</a>
                <a href="#about" className="btn me-2">About</a>
                <a href="#reviews" className="btn me-2">Reviews</a>
                <a href="#doctors" className="btn me-2">Doctors</a>
                <Link className="btn btn-outline-primary ms-2" to="/">Logout</Link>
              </>
            )}

            {/* Render Login and SignUp buttons only on /starthome */}
            {showAuthButtons && (
              <div className="d-flex ms-auto">
                <Link className="btn btn-outline-primary me-2" to="/userlogin">Login</Link>
                <Link className="btn btn-outline-primary me-2" to="/usersignup">SignUp</Link>
              </div>
            )}

            {/* Render Add User button only on /admin */}
            {showAddUserButton && (
              <Link className="btn btn-outline-primary ms-auto" to="/adduser">Add User</Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
