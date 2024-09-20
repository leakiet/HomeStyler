import React, { useState } from 'react';
import './freeQuote.css';

function FreeQuote(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [location, setLocation] = useState('');
  const [updates, setUpdates] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn reload trang
    alert(`Name: ${name}, Email: ${email}, Number: ${number}, Location: ${location}, Updates on WhatsApp: ${updates}`);

    // Reset các ô input sau khi submit
    setName('');
    setEmail('');
    setNumber('');
    setLocation('');
    setUpdates(false);
  };

  return (
    <>
      <div className='title-free-Quote'>
        <h1>Get a Free Quote</h1>
      </div>
      <div className="container-freequote">
        <div className='fq-img'>
          <img src='https://st.hzcdn.com/fimgs/pictures/home-offices/modern-bohemian-remodel-kh-home-design-and-furnishings-img~73215f610b7dfca8_0375-1-30218ea-w400-h400-b0-p0.jpg' alt="free quote" />
        </div>
        <div className='fq-form'>
          <div className='fq-form-title'>
            <h3>Designs for Every Budget</h3>
            <p>Get your dream home today. Let our experts help you</p>
          </div>
          <form className='fq-form-input' onSubmit={handleSubmit}>
            <div className='fq-form-input-item'>
              <div className="form-floating mb-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="floatingInputName"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="floatingInputName">Name</label>
              </div>
            </div>
            <div className='fq-form-input-item'>
              <div className="form-floating mb-3">
                <input
                  required
                  type="email"
                  className="form-control"
                  id="floatingInputEmail"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInputEmail">Email ID</label>
              </div>
            </div>
            <div className='fq-form-input-item'>
              <div className="form-floating mb-3">
                <input
                  required
                  type="number"
                  className="form-control"
                  id="floatingInputNumber"
                  placeholder=""
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <label htmlFor="floatingInputNumber">Number</label>
              </div>
            </div>
            <div className='fq-form-input-item'>
              <div className="form-check">
                <input
                  required
                  className="form-check-input"
                  type="checkbox"
                  checked={updates}
                  onChange={() => setUpdates(!updates)}
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Send me updates on WhatsApp
                </label>
              </div>
            </div>
            <div className='fq-form-input-item'>
              <div className="form-floating mb-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="floatingInputLocation"
                  placeholder=""
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <label htmlFor="floatingInputLocation">Location</label>
              </div>
            </div>
            <div className='fq-form-input-item'>
              <div className='fq-from-btn'>
                <button type="submit" className="btn btn-danger rounded-pill">GET FREE QUOTE</button>
              </div>
            </div>
            <div className='fq-form-input-item'>
              <div className='submit-item'>
                <p>By submitting this form, you agree to our <a href="/">Privacy Policy</a></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FreeQuote;
