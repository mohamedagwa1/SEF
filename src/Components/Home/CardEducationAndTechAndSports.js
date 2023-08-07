import image1 from '../../Images/secondary_background.jpg'
function CardEducationAndTechAndSports(props) {
    return (
    
        <div className="home-card my-5 ">
            <div className="row ">
              <div className="col-md-4 col-12 ">
                <img src={image1} className="img-fluid rounded-start Education-Tech-Sports-image "/>
              </div>
              <div className="col-md-8 col-12">
                <div className='Education-Tech-Sports-box'>
                <div className="about-right ">
                  <p className='Education-Tech-Sports-text1'>{props.title}</p>
                  <div className="home-line"></div>
                  <h4 className='Education-Tech-Sports-text2'>{props.subtitle}</h4>
                  <span className=" span-icon-about">
                    <i className="fa-regular fa-clock mx-2 Education-Tech-Sports-icon"></i>
                    <span className='Education-Tech-Sports-text22'>2h ago</span>
                  </span>
                </div>
                <div className='row'>
                    <div className='col-11'>
                <p className='Education-Tech-Sports-text3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                  fugit totam veritatis sint sequi commodi reprehenderit corporis quibusdam,
                  iusto ea perspiciatis nisi nesciunt natus ipsa, impedit pariatur nostrum aperiam.dolor sit amet
                  consectetur adipisicing elit Possimus.
                </p>
                </div>
                <div className='col-1'>
                <i className="fa-solid fa-chevron-right Education-Tech-Sports-icon2"></i>
                </div>
                </div>
              </div>
              </div>
            </div>
          </div>
  
   
    );
  }
  
  export default CardEducationAndTechAndSports; 