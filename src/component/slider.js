import { useState } from "react"
import './slider.css'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
const images = [
    { src: 'https://mir-s3-cdn-cf.behance.net/projects/404/808f0f171382245.Y3JvcCw5ODMsNzY5LDIwOSww.png',
     className: 'DVM-Hoodie image',
    prize: 1500 },
    { src: 'https://merchshop.in/wp-content/uploads/2019/06/code-repeat-design-black.jpg', 
    className: 'eat-code-repet-hoodie images',prize: 1000 },
    { src: 'https://ih1.redbubble.net/image.449090616.2017/ssrco,mhoodiez,mens,oatmeal_heather,front,square_product,600x600-bg,f8f8f8.u3.jpg', 
    className: 'hackathon-hoodie images', prize: 1200 },
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
        <FaArrowAltCircleRight className='right-arrow' onClick={Nextslide}/>
        {images.map((slide,index) =>{
            return(
                <div className={index === current ? 'slide active' : 'slide'}
                key={index}>
            {index === current && (
            <img src={slide.src} alt='hoodie' className={slide.className}/>
            )}
            </div>);
        })}
    </div>
  )
}

export default Slider