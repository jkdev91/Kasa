
import { useState } from 'react';
import arrowBack from '../assets/arrow_back_ios-24px 1.png';
import arrowFoward from '../assets/arrow_forward_ios-24px 1.png';
import "../sass/carousel.scss";

const Carousel = ({data}) => {

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };
    
    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };


    return (

        <div className="carousel">
            
            {data.map((item, index) =>{
                return <img src= {item} alt= {`picture ${index+1}`} key={index} className= { slide === index ? "slide" : "slide slide-hidden"} />
            })}

                {/* afficher arrowBack, arrowFoward and indicator number if data.length is superior at 1*/} 
            {
                data.length > 1 && (
                    <>
                        <img src= {arrowBack} alt="arrow slide precedent" className='arrow arrow-left' onClick={prevSlide}/>
                        <img src= {arrowFoward} alt="arrow slide next" className='arrow arrow-right' onClick={nextSlide}/>

                        <p className='indicator'>{slide+1} / {data.length}</p>

                    </>
                )
                
            }
    
        </div>
    
    ) 
    }



export default Carousel