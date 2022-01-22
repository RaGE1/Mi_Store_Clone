import React from 'react';
import ProductreviewCard from './ProductreviewCard.js'
import '../styles/Productreview.css';

const ProductReview = ({productReviews}) => {
  return (
  <div className='Productreviews'>
      {productReviews.map((ele,idx)=>(
          <ProductreviewCard price={ele.price} name={ele.name} image={ele.image} review={ele.review} index={idx} key={ele.image}/>
      ))}
  </div>);
};

export default ProductReview;
