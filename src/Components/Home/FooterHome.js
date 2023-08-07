import footerlogo from '../../Images/seff_logo_transparent.png';

function FooterHome() {
  return (
    <div style={{ backgroundColor: 'rgba(30, 30, 30 )' }}>
      <div className="footer-home-container8 ">
        <div className="clearfix ">
          <div className="float-start ">
            <img
              src={footerlogo}
              alt=""
              className="footer-image8"
              width={200}
              height={200}
            />
          </div>

          {/* <div className=" float-end footer-icon-arow-box8">
            <i class="fa-solid fa-circle-up footer-icon-arow8"></i>
          </div> */}
        </div>

        <div className="clearfix">
          <div className="float-start">
            <div>
              {' '}
              <h3 className="footer-title8">SOFTWARE ENGINEERING FOR FUTURE</h3>
            </div>
            <div className="mt-4 footer-text-header-box8">
              <span>HOME</span>
              <span className="footer-text-header8">ABOUT</span>
              <span className="footer-text-header8">TECH</span>
              <span className="footer-text-header8">BUSINESS</span>
              <span className="footer-text-header8">SECURITY</span>
              <br />
              <span>MEDICAL</span>
              <span className="footer-text-header8">STARTUPS</span>
              <span className="footer-text-header8">APPS</span>
              <span className="footer-text-header8">COURSES</span>
              <span className="footer-text-header8">CONTACT US</span>
              <span className="footer-text-header8">SPORTS</span>
            </div>
          </div>

          <div className="float-end footer-icon12-box8 ">
            <p className="footer-icon12-box-text8">
              sefffuture@gmail.com{' '}
              <i class="fa-solid fa-envelope footer-icon128"></i>
            </p>
            <p className="footer-icon12-box-text8 ">
              +20 109 8481 288{' '}
              <i class="fa-solid fa-phone-volume footer-icon128"></i>
            </p>
            <p className="footer-icon12-box-text8">+20 155 5177 645</p>
          </div>
        </div>
        <hr />
        <div className="clearfix">
          <div className="float-start">
            <span>@2023 EGYPT,ALL RIGHTS RESERVED</span>
          </div>
          <div className="float-end footer-icon11-box8">
            <i className="fa-brands fa-facebook  footer-icon118"></i>
            <i className="fa-brands fa-twitter  footer-icon118"></i>
            <i className="fa-brands fa-instagram  footer-icon118"></i>
            <i className="fa-brands fa-linkedin  footer-icon118"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterHome;
