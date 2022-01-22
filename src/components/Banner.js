import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = ({banner}) => {
  return (
  <div className='banner'>
      <Carousel fade>
        {banner.end.map((ele,idx)=>(
            <Carousel.Item key={idx} id="banner" interval={1000} keyboard={true}>
                <img 
                className="d-block w-100"
                id="bannerImage"
                src={ele.image} 
                alt={`${idx} banner`} />
                <Carousel.Caption>
                    <h3>{ele.name}</h3>
                    <p>{ele.description}</p>
                    <p>{ele.source}</p>
                    <u>Read More</u>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
      </Carousel>
  </div>);
};

export default Banner;
