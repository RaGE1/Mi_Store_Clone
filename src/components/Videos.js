import React from 'react';
import VideoCard from './VideoCard.js';
import '../styles/videos.css';

const Videos = ({videos}) => {
  return (
      <div className='videos'>
          {videos.map((ele,idx)=>(
              <VideoCard index={idx} key={ele.image} image={ele.image} name={ele.name}/>
          ))}
      </div>);
};

export default Videos;
