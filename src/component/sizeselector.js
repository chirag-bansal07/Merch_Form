import { useState } from "react";

import './sizeselector.css'
function Sizeselector(props) {
 const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
 const [selectedSize, setSelectedSize] = useState(null);

 const handleClick = (size) => {
    setSelectedSize(size);
    props.sizedata(size);
 }

 return (
    <div className="size">
      {sizes.map((size, index) => (
        <button 
        className="sizebutton"
          key={index} 
          onClick={() => handleClick(size)}
          style={{ 
            border: selectedSize === size ? '2px solid white' : 'none',
            padding: '5px 10px',
            margin: '5px',
            cursor: 'pointer',
          }}
        >
          {size}
        </button>
      ))}
    </div>
 )
}

export default Sizeselector