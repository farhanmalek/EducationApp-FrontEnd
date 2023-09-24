import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './SlideShowSection.css'; // Create this CSS file for styling

import image1 from '../../assets/Home/laptop1.png';
import image2 from '../../assets/Home/laptop2.png';
import image3 from '../../assets/Home/laptop3.png';
import image4 from '../../assets/Home.laptop4.png';

function SlideshowSection() {
  // Define an array of image URLs for the slideshow
  const images = [image1, image2, image3, image4];


  return (
    <div className="slideshow-section">
      <div className="text">
        {/* Add your text content here */}
        <h2>What we Offer</h2>
        <p>The creative problem solving program is a sereies of digital creation prijects aimed to encourage self-motervation
            and student agency, designed by New Zealand's leading IT indistry expoerts and schools.
        </p>
        <h3>What will students create?</h3>
      </div>
      <div className="slideshow">
        {/* Create the image slideshow */}
        <Carousel showArrows={true} showStatus={false} showIndicators={false}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={require(`../../assets/${image}`).default} alt={`Slide ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default SlideshowSection;
