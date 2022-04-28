import React from 'react';
import {Zoom} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import styles from '../styles/ImageSlider.module.css';

const Slideshow = () => { 

 const images =  [
     'pictures/ImageSlider/batman.jpg',
     'pictures/ImageSlider/blackAdam.jpg',
     'pictures/ImageSlider/doctorStrange.jpg',
     'pictures/ImageSlider/flash.jpg',
     'pictures/ImageSlider/morbius.jpg',
     'pictures/ImageSlider/thor.jpg',
    ];

    const zoomInProperties = {
        indicators: true,
        scale: 1.2,
        duration: 5000,
        transitionDuration: 500,
        infinite: true,

        prevArrow:(
            <div className={styles.prev}>
                <svg 
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                fill='#22DAA2'
                >
                    <path d='M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z'/>
                </svg>
            </div>
        ),
        nextArrow:(
            <div className={styles.next}>
                <svg 
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                fill='#22DAA2'
                >
                    <path d='M512 256L270 42.6v138.2H0v150.6h270v138z'/>
                </svg>
            </div>
        ),
    };

    return(
        <div>
        <Zoom {...zoomInProperties}>
            {images.map((each,index)=>(
                <div key={index}className={styles.key}>
                    <img src={each} className={styles.img}/>
                </div>
            ))}
        </Zoom>
        </div>
    )
};

export default Slideshow;