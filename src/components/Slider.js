import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({start}) => {
  return (
  <div>
      <Carousel fade>
         {start.map((item,idx)=>(
            <Carousel.Item>
                <img 
                className ="d-block w-100"
                src={item}
                alt={idx} />
                <p></p>
            </Carousel.Item>
            
        ))}
      </Carousel>
  </div>);
};

export default Slider;
