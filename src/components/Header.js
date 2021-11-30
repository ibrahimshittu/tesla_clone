import React from 'react'
import styled from 'styled-components'
//import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>

            <Container>
                <a href="#" >
                    <img src="/images/logo.svg" alt="tesla logo" />
                </a>
                <Menu>
                    <a href="#">Model S</a>
                    <a href="#">Model 3</a>
                    <a href="#">Model X</a>
                    <a href="#">Model Y</a>
                </Menu>
                <RightMenu>
                    <a href="#">Shop</a>
                    <a href="#">Tesla Account</a>

                </RightMenu>
            

            </Container>
            

        </div>
    )
}

export default Header

const Container = styled.div`
    min-height:60px;
    display:flex;
    align-items:center;
    padding:0 20px;
    position:fixed;
    hrefp:0;
    left:0;
    right:0;


`

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a {
        margin:0 10px;
        text-transform:uppercase;
        font-weight:600;
        flex-wrap: nowrap;

    }
`

const RightMenu = styled.div`
   
    a {
        margin:0 10px;
        text-transform:uppercase;
        font-weight:600;
        

    }
`