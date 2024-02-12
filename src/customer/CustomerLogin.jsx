import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as React from 'react';

import { useState } from 'react';

import img1 from '../assets/1.png';


function CutomerLogin() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Table>
                <TableBody>
                    <TableRow sx={{ display: 'flex' }}>
                        <TableCell sx={{ bgcolor: '#e2f2fc', height: '95vh', width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <img src={img1} alt="" style={{ height: '400px' }} />
                            <Button sx={{ width: '250px', bgcolor: '#1564c1', color: '#e2f2fc' }} variant="contained">Contained</Button>
                        </TableCell>
                        <TableCell>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                    backgroundColor:'gray',
                                    width:'35vw',
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent:'center',
                                    alignItems:'center'

                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="outlined-basic" label="Login Email" variant="outlined" InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                     
                                    },
                                }} />
                             
                                <TextField id="outlined-basic" label="Password" variant="outlined" 
                                InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                     
                                    },
                                }} />


                            </Box>

                        </TableCell>

                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export default CutomerLogin;