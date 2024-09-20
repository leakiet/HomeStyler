import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <footer className="bg-body-tertiary text-center">
        <div className="container p-4">
          <section className="mb-4">
            {/* Facebook */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f" />
            </a>
            {/* Twitter */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter" />
            </a>
            {/* Google */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-google" />
            </a>
            {/* Instagram */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram" />
            </a>
            {/* Linkedin */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            {/* Github */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-github" />
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