import { Button, Table, TableBody, TableCell, TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';
import Navbarr from "../Navbarr";


export default function EditProduct() {

    return (
        <div>
            <Navbarr />
            <Table>
                <TableBody>
                    <TableRow sx={{ display: 'flex' }}>
                        <TableCell sx={{ bgcolor: '#e2f2fc', height: '90vh', width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1 },
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

                                <TextField id="outlined-multiline-flexible" label="Product Title" variant="outlined" primary='black' InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                        backgroundColor: "white",
                                        width: '400px'


                                    },
                                }} />

                                <TextField id="outlined-basic" label="Description" variant="outlined" multiline rows={2}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                            backgroundColor: "white",
                                            width: '400px'
                                        },
                                    }} />
                                <TextField id="outlined-basic" label="Product Price" variant="outlined"
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                            backgroundColor: "white",
                                            width: '400px',


                                        },
                                    }} />
                                <TextField id="outlined-basic" label="Product discount" variant="outlined"
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                            backgroundColor: "white",
                                            width: '400px',


                                        },
                                    }} />
                                <TextField id="outlined-basic" label="Product Category" variant="outlined"
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                            backgroundColor: "white",
                                            width: '400px',


                                        },
                                    }} />
                                <TextField id="outlined-basic" label="Product Image URL" variant="outlined"
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                            backgroundColor: "white",
                                            width: '400px',


                                        },
                                    }} />
                                <Button sx={{ width: '400px', color: 'white', backgroundColor: '#1564c1', borderRadius: '10px' }} color="grey" variant="contained" >Shoppers Login</Button>



                            </Box>
                        </TableCell>
                        <TableCell sx={{ bgcolor: 'white', height: '90vh', width: '50%', padding: '0px' }}>

                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}