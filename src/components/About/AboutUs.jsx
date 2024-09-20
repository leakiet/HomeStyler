import './AboutUs.css';
function AboutUs() {
  return (
    <div>

      <section className="about_section layout_padding ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about/about-img.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    About Us
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.
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
                  <h2>
                    About Us
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about/about-img.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              We Are...
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="images/about/g2.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    MR. A
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio aspernatur officiis exercitationem asperiores praesentium
                  </p>
                
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="images/about/g2.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                  MR. B
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio aspernatur officiis exercitationem asperiores praesentium
                  </p>
                 
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="images/about/g3.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                  MR. C
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio aspernatur officiis exercitationem asperiores praesentium
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