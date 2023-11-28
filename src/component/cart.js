import Sizeselector from './sizeselector';
import './cart.css';
import Slider from './slider';
import { useState, useEffect } from 'react';
let selectedSize = '';
let selectedMerch = '';
let Prize,total;
let number,item;
const Cart = ({finalcart}) => {
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);



  const selectSize = (size) => {
    selectedSize = size;
    if (selectSize===''){

    }
  };

  const imageSelectHandler = (currentImage) => {
    selectedMerch = currentImage;
  };

  const cartHandler = () => {
    setCart([...cart, { merch: selectedMerch, size: selectedSize, Prize: Prize }]);
    number+=1;
    total+=Prize;
    localStorage.setItem('cartitem', number);
    localStorage.setItem('totalprize', total);
  };

  const cartReset = () => {
    setCart([]);
    total=0;
    number=0;
    localStorage.setItem('totalprize', 0);
    localStorage.setItem('cartitem', 0);
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  
  const Prizehandeler= (currentPrize)=>{
    Prize=currentPrize;
  }
  total=localStorage.getItem('totalprize');
  total=parseInt(total, 10); 
  item=localStorage.getItem('cartitem');
  item=parseInt(item, 10);
  finalcart(cart);  
  return (
    <div className='maincart'>
      <Slider className='slider' onImageSelect={imageSelectHandler} totalPrize={Prizehandeler}></Slider>
      <Sizeselector className='size' sizedata={selectSize} />
      <div className='cart'>
        <div className='buttons'>
      <button onClick={cartHandler} className='cartbutton'>ADD TO CART</button>
      <button onClick={cartReset} className='cartbutton'>RESET CART</button>
      </div>
      <div className='cartitem'>
      <div className='totalPrize'>YOUR CART TOTAL IS<div className='total'>{total}</div></div>
      <div className='totalPrize'>NUMBER OF ITEMS ADDED <div className='total'>{item}</div></div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
