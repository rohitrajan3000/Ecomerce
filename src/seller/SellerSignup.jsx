import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as React from 'react';


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/2.png';


function SellerSignup() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const handlesellerlogin = () => {
        navigate('/sellerlogin');
    };
    const handlecustomerlogin = () => {
        navigate('/customerlogin');
    };

    return (
        <div>
            <Table>
                <TableBody>
                    <TableRow sx={{ display: 'flex' }}>
                        <TableCell sx={{ bgcolor: '#1564c1', height: '100vh', width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <img src={img1} alt="" style={{ height: '400px' }} />
                            <Button sx={{ width: '250px', color: '#1564c1', backgroundColor: '#e2f2fc', borderRadius: '10px' }} color="grey" variant="contained" onClick={handlecustomerlogin} >Shoppers Login</Button>
                        </TableCell>
                        <TableCell sx={{ bgcolor: '#1564c1', height: '100vh', width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 2 },
                                    backgroundColor: '#e2f2fc',
                                    padding: '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '20px',

                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <h3 style={{ color: '#1564c1', textAlign: 'center', width: '400px' }}>Login and start shopping from your favorite brand. Refer a friend and save 50% OFF</h3>

                                <TextField id="outlined-multiline-flexible" label="Login Email" variant="outlined" primary='black' InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                        backgroundColor: "white",
                                        width: '400px'


                                    },
                                }} />
                                <TextField id="outlined-basic" label="Password" variant="outlined"
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                            backgroundColor: "white",
                                            width: '400px'

                                        },
                                    }} />
                                <TextField id="outlined-basic" label="Re-Enter Password" variant="outlined"
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                            backgroundColor: "white",
                                            width: '400px'

                                        },
                                    }} />

                                <Button sx={{ width: '250px', color: 'white', backgroundColor: '#1564c1', borderRadius: '10px' }} color="grey" variant="contained">Shoppers Login</Button>
                                <span style={{ color: '#1564c1', fontSize: '17px', textDecoration: 'underline',cursor:'pointer' }} onClick={handlesellerlogin}>Login</span>

                            </Box>

                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export default SellerSignup;