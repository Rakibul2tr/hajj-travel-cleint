import React from 'react';
import { Carousel } from 'react-bootstrap';
import UseContex from '../../../Contextapi/UseContext';

const Benner = () => {
  const {packeges}=UseContex();
  const carouselslic=packeges.slice(0,3)
  
    return (
        <div className="slidersec">
        <Carousel fade>
            {
                carouselslic.map(slider=><Carousel.Item key={slider._id}>
                        <div className="image">
                        <img
                        className="d-block w-100"
                        src={slider.imgLink}
                        alt="First slide"
                        />
                        </div>
                        <Carousel.Caption className="text-white carouselcapton">
                        <h1 className="display-4 fw-bolder">{slider.title}</h1>
                        <h5 className="px-5">{slider.description}</h5>
                        <button className="btn btn-warning fs-5 text-white">Get Started</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
         </Carousel>
    </div>
    );
};

export default Benner;