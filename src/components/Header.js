import React from 'react'
import styled from 'styled-components'
//import MenuIcon from '@material-ui/icons/Menu'

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
                    <a href="#">Solar Roof</a>
                    <a href="#">Solar Panels</a>
                </Menu>
                <RightMenu>
                    <a href="#">Shop</a>
                    <a href="#">Account</a>
                    <a href="#">Menu</a>
                    {/* <CustomMenu/> */}

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
    justify-content:space-between;
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
        margin:0 15px;
        font-weight:600;
        flex-wrap: nowrap;

    }

    @media (max-width: 768px) {
        display:none;
    }
`

const RightMenu = styled.div`
    display:flex;
    align-items:center;
   
    a {
        margin:10px;
        font-weight:600;
        

    }
`

// const CustomMenu = styled(MenuIcon)`
//     cursor:pointer;
// `