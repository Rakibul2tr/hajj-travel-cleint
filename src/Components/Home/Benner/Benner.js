import React from 'react';
import { Carousel } from 'react-bootstrap';
import UseContex from '../../../Contextapi/UseContext';

const Benner = () => {
  const {packeges}=UseContex();
  const carouselslic=packeges.slice(0,3)
    // const sliders=[
    //     {
    //       "id": 1,
    //       "title":"Dantal Hydraulics Private Limited",
    //       "img":"https://i.ibb.co/yk72m95/888.jpg",
    //       "des":"The company also has in house capability of design, development & manufacturing of custom built car parking solutions."
    //     },
    //     {
    //       "id": 2,
    //       "title":"Oral Health Overview",
    //       "img":"https://i.ibb.co/St6ktV5/6512.jpg",
    //       "des":"Good dental or oral care is important to maintaining healthy teeth, gums and tongue."
    //     },
    //     {
    //       "id": 3,
    //       "title":"Welcome our dantal Health Care Plan",
    //       "img":"https://i.ibb.co/Cs0fnB2/air-tickets.jpg",
    //       "des":" To keep your teeth and mouth healthy for a lifetime of use, there are steps that you should follow."
    //     }
    // ]
    



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