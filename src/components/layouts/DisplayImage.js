import React, { useState, useEffect } from 'react';
import di1 from '../../display_image/di1.jpg';
import di2 from '../../display_image/di2.jpg';
import di3 from '../../display_image/di3.jpg';

import './DisplayImage.css';

const DisplayImage = () => {
  const images = [di1, di2, di3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        (prevIndex + 1) % images.length
      );
    }, 2500); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []); // Run effect only once on mount

  return (
    <div className='image d-flex' style={{ position: 'relative' }}>
      <img src={images[currentImageIndex]} alt="display image" />
     <div>
     <div className="centered-text">
     Like silent messengers of beauty, flowers spread happiness wherever they bloom.
<h6></h6>      </div>
      <div>
        <button className='order'>Order Now</button>
      </div>
     </div>
    </div>
  );
};

export default DisplayImage;
