import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbarr from "../Navbarr";


export default function SellerHome() {
    const navigate = useNavigate();
    const handleaddproduct = () => {
        navigate('/addproduct');
    };
    return (
        <div>
            <Navbarr />
            <Table>
                <TableBody>
                    <TableRow sx={{ display: 'flex' }}>
                        <TableCell sx={{ bgcolor: '#e2f2fc', height: '90vh', width: '25%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        </TableCell>
                        <TableCell sx={{ bgcolor: '#1564c1', height: '90vh', width: '75%', padding:'0px' }}>
                            <div style={{width:'100%',backgroundColor:'white',display:'flex',justifyContent:"space-between",alignItems:'center',padding:'20px'}}>
                                <h3 style={{fontSize:'30px', fontWeight:'bold',fontStyle:'italic'}}>YOUR PRODUCT</h3>
                                <Button sx={{ width: '250px', color: 'white', backgroundColor: '#1564c1', borderRadius: '10px' }} color="grey" variant="contained" onClick={handleaddproduct}>Shoppers Login</Button>

                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    )
}