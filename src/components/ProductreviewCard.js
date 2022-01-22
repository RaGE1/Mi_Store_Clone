import React from 'react';
import '../styles/ProductreviewCard.css';

const ProductreviewCard = ({image,index,price,name,review}) => {
  return (
  <div className='ProductreviewCard'>
    <img src={image} alt={`${index} product`} />
    <h5>{review}</h5>
    <span>{name}</span>
    <b>{price}</b>
  </div>);
};

export default ProductreviewCard;
