import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CardContent from './CardContent';

const PartThree = () => {

    return (
        <div className='three gradient'>
          <h3>Testimonials</h3>
          <Carousel showArrows={true}>
            <CardContent/>
            <CardContent/>
            <CardContent/>
          </Carousel>
          
        </div>
    )
}

export default PartThree
