import { useState } from 'react';
import Detailsform from './component/detailsform';
import Cart from './component/cart';
import './App.css';

function useFormData() {
 const [form, setForm] = useState(undefined);
 const [order, setOrder] = useState(undefined);
 const [page, setPage] = useState(false);

 const submitData = () => {
    if (form === undefined) {
      alert('Please validate the form');
      return;
    }
    console.log('user details:', form, 'order:', order);
    setPage(true);
 };

 return { form, setForm, order, setOrder, page, setPage, submitData };
}

function App() {
 const {setForm, setOrder, page, submitData } = useFormData();

 return (
    <div className="App">
      {page && <h1 className="submited">THANK YOU <br/>your form is submitted</h1>}
      {!page && (
        <div className='mainpage'>
          <Detailsform submitform={setForm}></Detailsform>
          <Cart className="Cart" finalcart={setOrder}></Cart>
          <button className="submit-button" onClick={submitData}>
            submit
          </button>
        </div>
      )}
    </div>
 );
}

export default App;