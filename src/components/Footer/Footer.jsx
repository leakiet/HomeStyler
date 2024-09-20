import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <footer className="bg-body-tertiary text-center container-footer">
        <div className="container p-4">
          <section className="">
            <div className="row">
              <div className="col-lg-2 d-none d-md-block mt-2">
                  <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" className="item-photo" />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                  </a>
              </div>
              <div className="col-lg-2 d-none d-md-block mt-2">
                  <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" className="item-photo" />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                  </a>
              </div>
              <div className="col-lg-2 d-none d-md-block mt-2">
                  <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" className="item-photo" />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                  </a>
              </div>
              <div className="col-lg-2 mt-2">
                  <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" className="item-photo" />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                  </a>
              </div>
              <div className="col-lg-2 mt-2">
                  <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" className="item-photo" />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                  </a>
              </div>
              <div className="col-lg-2 mt-2">
                  <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" className="item-photo" />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                  </a>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
          © 2020 Copyright:
          <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    </>
  )
}

export default Footer
