import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';
import { useState } from 'react';
import './App.css';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import CustomerLogin from './customer/CustomerLogin';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Table>
        <TableBody>
          <TableRow sx={{display:'flex'}}>
            <TableCell sx={{ bgcolor: '#e2f2fc', height: '95vh', width:'50%', display:'flex', justifyContent:'center', alignItems:'center',  flexDirection:'column'}}>
              <img src={img1} alt="" style={{height:'400px'}}/>
              <Button sx={{width:'250px',bgcolor:'#1564c1',color:'#e2f2fc'}} variant="contained">Contained</Button>
            </TableCell>
            <TableCell sx={{ bgcolor: '#1564c1', height: '95vh', width:'50%', display:'flex', justifyContent:'center', alignItems:'center' , flexDirection:'column'}}>
              <img src={img2} alt="" style={{height:'400px'}}/>
              <Button sx={{width:'250px',bgcolor:'#e2f2fc',color:'blue'}} variant="contained" >Contained</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <CustomerLogin/>
    </div>
  );
}

export default App;
