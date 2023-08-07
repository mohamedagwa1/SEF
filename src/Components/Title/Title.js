import React from 'react';
import './Title.css';

const TitleComponent = ({ mainTitle }) => {
  return (
    <div className='home-general-title'>
      <div className='container-xl'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='text-uppercase text-white position-absolute'>{mainTitle}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleComponent;
