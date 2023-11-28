import { useState } from "react"
import './slider.css'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
const images = [
    { src: 'https://images.bewakoof.com/t1080/men-s-pink-cyber-samurai-graphic-printed-oversized-hoodies-625389-1699949518-2.jpg',
     className: 'Hoodie1',
    prize: 1500 },
    { src: 'https://images.bewakoof.com/t1080/men-s-green-jurassic-graphic-printed-oversized-hoodie-597139-1700548840-1.jpg', 
    className: 'hoodie2',prize: 1000 },
    { src: 'https://images.bewakoof.com/t1080/men-s-black-king-t-challa-graphic-printed-oversized-hoodies-628050-1701082090-2.jpg', 
    className: 'hoodie3', prize: 1200 },
]
const Slider = (props) => {
    const length = images.length;
    const [current,setCurrent] = useState(0)    
    if (!Array.isArray(images)||images.length<=0){
        return null;
    }
    const prevslide =()=>{
        setCurrent(current === 0 ? length - 1 : current - 1);
        
    }
   
    const Nextslide=()=>{
        setCurrent(current === length-1 ? 0:current + 1 );
        
    }
    let currentImage = images[current].className;
    props.onImageSelect(currentImage);
    let currentPrize = images[current].prize;
    props.totalPrize(currentPrize);
    return (
    <div className="slider">
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevslide}/>
        
        {images.map((slide,index) =>{
            return(
                <div className={index === current ? 'slide active' : 'slide'}
                key={index}>
            {index === current && (
            <img src={slide.src} alt='hoodie' className='image'/>
            )}
            </div>);
        })}
        <FaArrowAltCircleRight className='right-arrow' onClick={Nextslide}/>
    </div>
  )
}

export default Slider