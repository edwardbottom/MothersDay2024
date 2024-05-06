import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import fileList from './SlideShowData';
import './index.css';


const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }
];

function isValidImage(url) {
    const img = new Image();
    img.src = url;
    return img.complete || (img.width + img.height) > 0;
}

const Slideshow = () => {

    return (
        <div>
            <div style={{margin: '30px', padding: '20px'}}>
                <h1>Happy Mother's Day!</h1>
                <p>This year for Mother's Day, I thought I would recount some of our favorite times together. Hope you enjoy the show!</p>
                <Slide slidesToScroll={1} slidesToShow={1} indicators={true} responsive={responsiveSettings}>
                    {
                        fileList.filter(slideImage => slideImage.source && isValidImage(slideImage.source))
                            .map((slideImage, index) => (
                                <div className="each-slide-effect" key={index}>
                                    <div style={{'backgroundImage': `url(${slideImage.source})`}}></div>
                                    <p>{slideImage.description}</p>
                                </div>
                            ))
                    }
                </Slide>
            </div>
        </div>
    )
}

export default Slideshow;
