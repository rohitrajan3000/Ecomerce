import * as React from 'react';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import CustomerHome from './customer/CustomerHome';
import CustomerLogin from './customer/CustomerLogin';
import CutomerSignup from './customer/CustomerSignup';
import AddProduct from './seller/AddProduct';
import SellerHome from './seller/SellerHome';
import SellerLogin from './seller/SellerLogin';
import SellerSignup from './seller/SellerSignup';

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleUserClick =()=> {
    navigate('/customerlogin');
    
};

  return (
    <div>
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customerlogin' element={<CustomerLogin />} />
        <Route path='/sellerlogin' element={<SellerLogin />} />
        <Route path='/customersignup' element={<CutomerSignup />} />
        <Route path='/sellersignup' element={<SellerSignup />} />
        <Route path='/customerhome' element={<CustomerHome />} />
        <Route path='/sellerhome' element={<SellerHome />} />
        <Route path='/addproduct' element={<AddProduct />} />
        
      </Routes>
      
    </div>
  );
}

export default App;
