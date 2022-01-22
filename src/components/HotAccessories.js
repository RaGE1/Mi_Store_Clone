import React from 'react';
import HotItemCard from './HotItemCard.js'
import '../styles/HotAccessories.css';

const HotAccessories = ({sides,Cover}) => {
  return (
  <div className='HotAccessories'>
      <div>
          <img src={Cover} alt="Cover" />
      </div>
      <div>
          {sides.map((ele,idx)=>(
              <HotItemCard key={ele.image} name={ele.name} price={ele.price} image={ele.image} index={idx}/>
          ))}
        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"/>
      </div>
  </div>);
};

export default HotAccessories;
