import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <footer className="text-center footer-wrapper">
        <div className="container p-4">
          <section className="mb-4">
            {/* Facebook */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-outline btn-floating m-1"
              href="https://www.facebook.com/"
              target="_blank"
              role="button"
            >
              <i className="bi bi-facebook fs-1" ></i>
            </a>
            {/* Twitter */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-outline btn-floating m-1"
              href="https://twitter.com/"
              target="_blank"
              role="button"
            >
              <i className="bi bi-twitter fs-1" />
            </a>
            {/* Google */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-outline btn-floating m-1"
              href="https://www.google.com/"
              target="_blank"
              role="button"
            >
              <i className="bi bi-google fs-1" />
            </a>
            {/* Instagram */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-outline btn-floating m-1"
              href="https://www.instagram.com/"
              target="_blank"
              role="button"
            >
              <i className="bi bi-instagram fs-1" />
            </a>
          </section>
          {/* Section: Social media */}
          {/* Section: Form */}
          <section className="">
            <form action="">
              {/*Grid row*/}
              <div className="row d-flex justify-content-center">
                {/*Grid column*/}
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-5 col-12">
                  {/* Email input */}
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <input
                      type="email"
                      id="form5Example24"
                      className="form-control"
                      placeholder='Email address'
                    />
                  </div>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-auto">
                  {/* Submit button */}
                  <button
                    data-mdb-ripple-init=""
                    type="submit"
                    className="btn btn-primary mb-4"
                  >
                    Subscribe
                  </button>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </form>
          </section>
          {/* Section: Form */}
          {/* Section: Text */}
          <section className="mb-4">
            <p>
              With the ever-increasing number of design options available, it is easy to lose track of projects and their associated costs. A home interior Website enables users to estimate costs by viewing cost of different designs, accessories, and products. By having a clear overview of items that their projects may require, users can make decisions as per their budgets more effectively.
            </p>
          </section>
          {/* Section: Text */}
          {/* Section: Links */}
          <section className="mb-4">
            {/*Grid row*/}
            <div className="row footer-links">
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Bathroom</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body" href="#!">
                    Vanities and Cabinets 
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                    Showers and Bathtubs
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                    Toilets and Bidets
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                    Bathroom Sinks
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                    Mirrors and Medicine Cabinets
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Furniture</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body" href="#!">
                    Sofas and Couches
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                    Chairs and Recliners
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                    Tables
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                    Beds and Mattresses
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                    Storage
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Lighting</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body" href="#!">
                    Ceiling Lights
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                    Wall Lights
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                    Floor Lamps
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                    Table Lamps
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                    Outdoor Lighting
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Kitchen</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body" href="#!">
                    Cabinets and Pantries
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                    Countertops
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                    Sinks and Faucets
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                    Kitchen Islands and Carts
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                    Backsplashes
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </section>
          {/* Section: Links */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="#">
            Home Styler
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  )
}

export default Footer
