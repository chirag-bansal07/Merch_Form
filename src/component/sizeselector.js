import { useState } from "react";

import './sizeselector.css'
function Sizeselector(props) {
 const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
 const [selectedSize, setSelectedSize] = useState(null);

 const handleClick = (size) => {
    setSelectedSize(size);
    props.sizedata(size);
 }

 return (
    <div className="size">
      {sizes.map((size, index) => (
        <label className="sizebutton" key={index}>
          <input 
            required
            type="radio" 
            name="size" 
            value={size} 
            checked={selectedSize === size} 
            onChange={() => handleClick(size)}
          />
          {size}
        </label>
      ))}
    </div>
 )
}

export default Sizeselector