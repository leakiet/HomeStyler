import React from 'react';
import './freeQuote.css';

function FreeQuote(props) {
  return (
    <div className="container-freequote">
      <div className='fq-img'>
        <img src='https://st.hzcdn.com/fimgs/pictures/home-offices/modern-bohemian-remodel-kh-home-design-and-furnishings-img~73215f610b7dfca8_0375-1-30218ea-w400-h400-b0-p0.jpg' alt="free quote" />
      </div>
      <div className='fq-form'>
        <div className='fq-form-title'>
          <h3>Designs for Every Budget</h3>
          <p>Get your dream home today. Let our experts help you</p>
        </div>
        <div className='fq-form-input'>
          <div className='fq-form-input-item'>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="" />
              <label htmlFor="floatingInput">Name</label>
            </div>
          </div>
          <div className='fq-form-input-item'>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="" />
              <label htmlFor="floatingInput">Imail ID</label>
            </div>
          </div>
          <div className='fq-form-input-item'>
            <div className="form-floating mb-3">
              <input type="number" className="form-control" id="floatingInput" placeholder="" />
              <label htmlFor="floatingInput">Number</label>
            </div>
          </div>
          <div className='fq-form-input-item'>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="checked" id="flexCheckDefault" />
              <label checkboxabel='true' className="form-check-label" htmlFor="flexCheckDefault">
                Send me updates on WhatsApp
              </label>
            </div>
          </div>
          <div className='fq-form-input-item'>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="" />
              <label htmlFor="floatingInput">Location</label>
            </div>
          </div>
          <div className='fq-form-input-item'>
            <div className='fq-from-btn'>
              <button type="button" className="btn btn-danger rounded-pill">GET FREE REQUOTE</button>
            </div>
          </div>
          <div className='fq-form-input-item'>
            <div className='submit-item'>
              <p>By submitting this form, you agree to our <a href="/">Privacy Policy</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeQuote;