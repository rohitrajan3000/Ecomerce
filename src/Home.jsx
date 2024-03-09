import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import img1 from './assets/1.png';
import img2 from './assets/2.png';

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleCustomerLogin =()=> {
    navigate('/customerlogin');
  };
  const handleSellerLogin =()=> {
    navigate('/sellerlogin');
  };

  return (
    <div>
      <Table>
        <TableBody>
          <TableRow sx={{ display: 'flex' }}>
            <TableCell sx={{ bgcolor: '#e2f2fc', height: '100vh', width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <img src={img1} alt="" style={{ height: '400px' }} />
              <Button sx={{ width: '250px', color: 'white', backgroundColor: '#1564c1', borderRadius: '10px' }} color="grey" variant="contained" onClick={handleCustomerLogin} >Shoppers Login</Button>
            </TableCell>
            <TableCell sx={{ bgcolor: '#1564c1', height: '100vh', width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <img src={img2} alt="" style={{ height: '400px' }} />
              <Button sx={{ width: '250px', color: '#1564c1', backgroundColor: '#e2f2fc', borderRadius: '10px' }} color="grey" variant="contained"onClick={handleSellerLogin} >Seller Login</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
      
    </div>
  );
}

export default Home;