import React from 'react'
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

const Client = (props: any) => {
  return (
    <div>
      <div className="khung">
        <header>
          <div className="khung-header">

            <div className="heard">
              <h3>Bridge</h3>
            </div>

            {/* <div className="logo">
          <img src="./img/logo.avif"/>
        </div> */}
            <div className="logo">
              <input type="search" id="form1" className="form-control" aria-label="Search" />
            </div>

            <div className="search">
              {/* <i className="bi bi-bag"></i> */}
              {/* <i className="fa-solid fa-magnifying-glass search_i" /> */}
              <i className="fa-solid fa-cart-shopping me-4" />
              <Link to={`/SignIn`}><i className="fa-regular fa-user user_i " /></Link>
            </div>

          </div>
        </header>
        <nav>
          <div className="khung-nav">
            <a href={"/"}>Home</a>
            <a href={""}>About</a>
            <a href={""}>Flavors</a>
            <a href={""}>Contact</a>
            <a href={""}>Shop</a>
          </div>
        </nav>
        <section>

          <Outlet />
        </section>
        <footer>
          <div className="image-footer" style={{}}>
          </div>
          <div className="footer-contact">
            <div className="footer-us">
              <div className="footer-frame">
                <div className="footer-us-title">
                  <h2>About Us</h2>
                </div>
                <div className="footer-us-content">
                  <p>The way the cakes and pastries from
                    <br />
                    Cookie Crumbles, melt in your mouth is to be
                    <br />
                    experienced to believe. It has a solid
                    <br />
                    start and yet that is the way the cookie
                    <br />
                    crumbles..!</p>
                </div>
              </div>
            </div>
            <div className="footer-Support">
              <div className="footer-Support1">
                <div className="footer-Support1-title">
                  <h2>About Us</h2>
                </div>
                <div className="footer-Support1-content">
                  <a href={""}>Help</a>
                  <a href={""}>Delivery Information</a>
                  <a href={""}>Privacy Policy</a>
                  <a href={""}>Terms &amp; Conditions</a>
                  <a href={""}>Shipping details</a>
                </div>
              </div>
              <div className="footer-Support2">
                <div className="footer-Support1-title">
                  <h2>Support</h2>
                </div>
                <div className="footer-Support1-content">
                  <a href={""}>Help</a>
                  <a href={""}>Delivery Information</a>
                  <a href={""}>Privacy Policy</a>
                  <a href={""}>Terms &amp; Conditions</a>
                  <a href={""}>Shipping details</a>
                </div>
              </div>
              <div className="footer-Support3">
                <div className="footer-Support1-title">
                  <h2>Collection</h2>
                </div>
                <div className="footer-Support1-content">
                  <a href={""}>Help</a>
                  <a href={""}>Delivery Information</a>
                  <a href={""}>Privacy Policy</a>
                  <a href={""}>Terms &amp; Conditions</a>
                  <a href={""}>Shipping details</a>
                </div>
              </div>
            </div>
            <div className="footer-Contactus">
              <div className="footer-frame">
                <div className="footer-us-title">
                  <h2>Contact us</h2>
                </div>
                <div className="footer-us-content">
                  <p>The way the cakes and pastries from
                    <br />
                    Cookie Crumbles, melt in your mouth is to be
                    <br />
                    experienced to believe. It has a solid
                    <br />
                    start and yet that is the way the cookie
                    <br />
                    crumbles..!</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>

  )
}

export default Client