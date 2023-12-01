import Sizeselector from './sizeselector';
import './cart.css';
import Slider from './slider';
import { useState, useEffect } from 'react';
let selectedSize = '';
let selectedMerch = '';
let Prize,total;
const Cart = ({finalcart}) => {
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);
  const [sizeerror, setsizeerror] = useState(false);



  const selectSize = (size) => {
    selectedSize = size;
    if (selectedSize === ''){
      setsizeerror(true);
      console.log(sizeerror)
      return;
    }
  };

  const imageSelectHandler = (currentImage) => {
    selectedMerch = currentImage;
  };

  const cartHandler = () => {
    setCart([...cart, { merch: selectedMerch, size: selectedSize, Prize: Prize }]);
    total+=Prize;
    localStorage.setItem('totalprize', total);
  };

  const cartReset = () => {
    setCart([]);
    total=0;
    localStorage.setItem('totalprize', 0);
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  
  const Prizehandeler= (currentPrize)=>{
    Prize=currentPrize;
  }
  total=localStorage.getItem('totalprize');
  total=parseInt(total, 10); 
  finalcart(cart);  
  return (
    <div className='maincart'>
      <Slider className='slider' onImageSelect={imageSelectHandler} totalPrize={Prizehandeler}></Slider>
      <Sizeselector className='size' sizedata={selectSize}/>
      {sizeerror&& <span className="error">Please Select The Size</span>}
      <div className='cart'>
        <div className='cartcount'>
      <button onClick={cartHandler} className='cartbutton'>ADD TO CART</button>
      <div className='totalPrize'>NUMBER OF ITEMS ADDED <div className='total'>{cart.length}</div></div>
      
      </div>
      <div className='cartcount'>
      <button onClick={cartReset} className='cartbutton'>RESET CART</button>
      <div className='totalPrize'>YOUR CART TOTAL IS<div className='total'>{total}</div></div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
