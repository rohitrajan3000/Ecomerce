import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../src/assets/logo.png';

export default function Navbarr() {
    return (
        <div>
            <Navbar style={{backgroundColor:'#fbeb61',height:'10vh'}}>
                <Container>
                    <Navbar.Brand href="#home" 
                    style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                        <img
                            alt=""
                            src={logo}
                            height="35"
                            className="d-inline-block align-top"
                            style={{paddingRight:'20px'}}
                        />{' '}
                        <h1 style={{fontSize:'30px', fontWeight:'bold',fontStyle:'italic'}}>STAR STELLER</h1>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}