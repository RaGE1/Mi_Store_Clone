import React from 'react';
import Offer from './Offer.js';
import '../styles/Offers.css';

const Offers = ({offers}) => {
  return (
  <div className='offerSection'>
      {offers.map((item,idx)=>(
          <Offer index={idx} link={item.url} key={item.image} src={item.image}/>
      ))}
  </div>)
};

export default Offers;
