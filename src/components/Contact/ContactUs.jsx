import './ContactUs.css';
function ContactUs() {
  return (
    <div>

<section className="contact_section  ">
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-lg-6 ">
          <div className="form_container">
            <div className="heading_container ">
              <h2>
                Contact Us
              </h2>
            </div>
            <form action="">
              <div>
                <input type="text" placeholder="Your Name" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" className="message-box" placeholder="Message" />
              </div>
              <div className="btn_box">
                <button>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-5 col-lg-6">
          <div className="subscribe-box">
            <h3>
              Subscribe To Our Product
            </h3>
            <p>
              
We will email you if we have new products or new designs.
            </p>
            <form action="">
              <input type="email" placeholder="Enter your email"/>
              <button>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
    <div style={{backgroundColor:"#777", height:"200px"}}>

    </div>
  <div className='container'>
    <div className='row'>
        <div className='col-lg-6 col-xs-12 info'>
            <h3>Location: 275 Nguyen Van Dau SaiGon</h3>
            <h3>Email: techwiz@email.com</h3>
            <h3>Hotline: 0906 684 944</h3>
        </div>
        <div className='col-lg-6 col-xs-12'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9539791479124!2d106.69133627493333!3d10.81483388933626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e962682287%3A0xb40b8ddfe7593e6!2zMjc1IE5ndXnhu4VuIFbEg24gxJDhuq11LCBQaMaw4budbmcgMTEsIELDrG5oIFRo4bqhbmgsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1726821737552!5m2!1svi!2s" width="100%" height="450" style={{border:"0", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
        </div>
    </div>
    
  </div>
    </div>
  );
}

export default ContactUs;