import React, { useRef } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

export default function CardUserApplyForJob() {
  const fileInputRef = useRef(null);

  const handleButtonClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // هنا يمكنك إجراء المزيد من العمليات على الملف المحدد، مثل قراءة محتوياته أو إرساله إلى الخادم

    console.log('تم تحديد الملف:', file.name);
  };

  return (
    <div>
      <div className="container_job content_job p-3 mb-4 rounded">
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column flex-md-row Justify-content-between align-items-center gap-3">
            <div className="d-flex gap-2 align-items-center">
              <i className="fa-solid fa-bars content"></i>
              <div>
                <span className="content_it content">IT</span>
              </div>
            </div>
            <div className="flex-grow-1">
              <h5>Front-end React JS Developer</h5>
              <h6 className="text">Eptikar IT Solution, Obour City</h6>
            </div>
            <div className="d-flex flex-row flex-md-column justify-content-between text-end">
              <h6 className="text">5000EGP-8000EGP Per Month</h6>
              <div>
                <i className="fa-solid fa-location-dot text-warning"></i>
                <h6 className="text d-inline ">&#160; On Site</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8 Balqees my-3">
          <h3>Balqees Hamdi Sabir</h3>
          <p>
            Computer science , international islamic
            <br />
            univercity{' '}
          </p>
        </div>

        <div className="row py-4">
          <div className="col-lg-6 col-sm-12  ">
            <div>
              <label className="PD"> Email</label> <br />
              <input className="inputt w-100" type="text" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 mt-3 mt-lg-0">
            <div>
              <label className="PD">Years Of experince</label> <br />
              <input className="inputt w-100" type="text" />
            </div>
          </div>
        </div>

        <div className="row py-4">
          <div className="col-lg-7 col-sm-12">
            <div>
              <label className="PD"> Mobile nomber</label> <br />
              <input className="inputt w-75" type="text" />
            </div>
          </div>
        </div>

        <div className="row py-4">
          <div className="col-lg-8 col-sm-12">
            <div className="Upload">
              <h3>Upload Cv</h3>
            </div>

            <div>
              <div>
                <input
                  type="file"
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <button onClick={handleButtonClick} className="BtnUpload">
                  <div className="shape-upload">
                    {' '}
                    <FaCloudUploadAlt />
                  </div>
                  <h3>
                    Drag & drop files or <a href="/#"> Browse</a>
                  </h3>
                  <p>
                    Supported formates PNG, JPEG, GIF, MP4,PDF,PSD, AI Word, PPT
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row TwoButton my-5">
          <div className=" col-md-2 col-sm-12">
            <button className="BtnOne">
              <a href="#/">Cancel</a>
            </button>
          </div>
          <div className=" col-md-2 col-sm-12">
            <button>
              <a href="#/">Save</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
