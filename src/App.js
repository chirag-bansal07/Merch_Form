import Detailsform from './component/detailsform';
import Cart from './component/cart';
import './App.css';
let form, order;
const submit = (FormData) =>{
  form=FormData;
}
const cartdata=(cart) =>{
  order=cart
}
const submitdata= ()=>{
  if(form === undefined){
    alert('Please validate the form')
    return;
  }
console.log ('user details:',form, 'order:',order);
}
function App() {
  return (
    <div className="App">
      <Detailsform submitform={submit}></Detailsform>
      <Cart className='Cart' finalcart={cartdata}></Cart>
      <button className='submit-button' onClick={submitdata}>submit</button>
    </div>
  );
}

export default App;
