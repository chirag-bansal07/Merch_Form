import React, { useState, useEffect } from 'react';
import './detailform.css';
import { validateBitsId, validationphonenumber, validateemail } from './validation.js';

const DetailsForm = ({submitform}) => {
  const initialFormData = {
    name: '',
    email: '',
    bitsId: '',
    phoneNumber: '',
    hostel: ''
  };

  const [formData, setFormData] = useState(() => {
    const storedFormData = localStorage.getItem('formData');
    return storedFormData ? JSON.parse(storedFormData) : initialFormData;
  });
  const [display,setdisplay] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    phoneNumber: '',
    bitsId: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!validateemail(formData.email)) {
      newErrors.email = 'Please enter a valid Email';
    }

    if (!validationphonenumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid Phone Number';
    }

    if (!validateBitsId(formData.bitsId)) {
      newErrors.bitsId = 'Please Enter Valid BITS ID';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    setFormSubmitted(true);
    submitform(formData);
    setdisplay(false);
    
  };

  const resetHandeler = () => {
    setFormData(initialFormData);
    setFormSubmitted(false);
    setErrors({
      email: '',
      phoneNumber: '',
      bitsId: ''
    });
  };
  function show(){
    setdisplay(true);
  }

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <div>
      { !display ? (
      <div className='hideform'>
        <button className='showform' onClick={show}>{formSubmitted ?('Details Submitted'):('Enter Your Details')}</button>
      </div> )
      : (
      <div className='form'>
        <form className='main' onSubmit={handleSubmit}>
          <h2>Enter Your Details</h2>
          <div className='flex'>
            <div className='div'>
              <label htmlFor="name">Name:</label><br />
              <input className='input' type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />
            </div>
            <div className='div'>
              <label htmlFor="email">Email:</label><br />
              <input className='input' type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>
          <div className='flex'>
            <div className='div'>
              <label htmlFor="bitsId">BITS ID:</label><br />
              <input className='input' type="text" id="bitsId" name="bitsId" value={formData.bitsId} onChange={handleChange} required />
              {errors.bitsId && <span className="error">{errors.bitsId}</span>}
            </div>
            <div className='div'>
              <label htmlFor="phoneNumber">Phone Number:</label><br />
              <input className='input' type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
              {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
            </div>
          </div>
          <div>
            <label htmlFor="hostel">Hostel:</label>
            <select id="hostel" name="hostel" value={formData.hostel} onChange={handleChange} required>
              <option value="" disabled> </option>
              <option value="vyas">Vyas</option>
              <option value="SRbhawan">SR bhawan</option>
              <option value="ram">Ram</option>
              <option value="Bhudh">Bhudh</option>
              <option value="Krishna">Krishna</option>
            </select>
          </div>
          <label className='terms'>
            <input type="checkbox" id="agree" required />
            I agree to the <a href="/terms">Terms and Conditions</a>
          </label>
          <div className='buttons'>
            <button className='submit' type='submit'>
            VALIDATE</button>
            <button type='button' className='reset' onClick={resetHandeler}>RESET</button>
          </div>
        </form>
      </div>
      )}
    </div>
  );
};

export default DetailsForm;
