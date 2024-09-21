import "./AboutUs.css";
function AboutUs() {
  return (
    <div>
      <section className="about_section layout_padding ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="/IMAGES/LIVING_ROOM/p1.avif" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>
                  Welcome to Home Styler, where innovation meets elegance.
                  Founded with a passion for creating spaces that inspire, we
                  are more than just an interior design company—we are
                  storytellers. Every room has a unique narrative, and our
                  mission is to bring that story to life with thoughtfully
                  curated designs that reflect your personality, lifestyle, and
                  aspirations. At Home Styler, we believe that great design is
                  not just about aesthetics but also about functionality. We
                  work closely with our clients to understand their needs,
                  ensuring that every piece, color, and layout serves a purpose.
                  Whether you are looking for a minimalist, contemporary space
                  or a cozy, rustic retreat, our team of skilled designers is
                  dedicated to delivering results that surpass expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_section layout_padding ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2></h2>
                </div>
                <p>
                  At Home Styler, our extensive experience sets us apart in the
                  world of interior design. With over 15 years in the industry,
                  we’ve had the privilege of working on a diverse range of
                  projects, from luxurious urban apartments to cozy countryside
                  homes. Our expertise spans across styles, allowing us to craft
                  spaces that are as unique as the clients we serve. Our design
                  process is rooted in collaboration. We believe that every
                  successful project begins with understanding the client’s
                  vision. From the initial consultation to the final reveal, we
                  work hand-in-hand with you to ensure that every detail is
                  thoughtfully executed. Whether it’s selecting the perfect
                  materials, optimizing spatial layouts, or creating custom
                  furniture pieces, our experienced team knows how to balance
                  practicality with beauty.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="/IMAGES/LIVING_ROOM/p3.avif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>We Are...</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="/IMAGES/DESIGNER/f1.avif" alt="" />
                </div>
                <div className="detail-box">
                  <h5>JESSICA</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque distinctio aspernatur officiis exercitationem
                    asperiores praesentium
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="/IMAGES/DESIGNER/f3.avif" alt="" />
                </div>
                <div className="detail-box">
                  <h5>MICHAEL</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque distinctio aspernatur officiis exercitationem
                    asperiores praesentium
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="/IMAGES/DESIGNER/f4.avif" alt="" />
                </div>
                <div className="detail-box">
                  <h5>EMMA</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque distinctio aspernatur officiis exercitationem
                    asperiores praesentium
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
