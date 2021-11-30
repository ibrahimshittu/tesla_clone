import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'

//import MenuIcon from '@material-ui/icons/Menu'

//import { Link } from "react-router-dom";

const Header = () => {

    const [burgerStatus, setBurgerStatus] = useState(false)

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
                    <a href="#" onClick = {() => setBurgerStatus(!burgerStatus) }>Menu</a>
                    {/* <CustomMenu/> */}

                </RightMenu>
                <BurgerNav show={burgerStatus} >
                    <CloseWrapper>
                        <CustomClose onClick = {() => setBurgerStatus(!burgerStatus) }/>
                    </CloseWrapper>
                    
                    <li><a href="">Model S</a></li>
                    <li><a href="">Model 3</a></li>
                    <li><a href="">Model X</a></li>
                    <li><a href="">Model Y</a></li>
                    <li><a href="">Solar Roof</a></li>
                    <li><a href="">Solar Panel</a></li>
                    <li><a href="">Existing Inventory</a></li>
                    <li><a href="">Used Inventory</a></li>
                    <li><a href="">Trade-in</a></li>
                    <li><a href="">Test drive</a></li>
                    <li><a href="">Powerwall</a></li>
                    <li><a href="">Commercial Energy</a></li>
                    <li><a href="">Utilities</a></li>
                    <li><a href="">Charging</a></li>
                    <li><a href="">Find Us</a></li>
                    <li><a href="">Support</a></li>

                </BurgerNav>
            

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
    z-index:1;


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


const BurgerNav = styled.div`
    position: fixed;
    background-color:white;
    top: 0;
    right:0;
    bottom:0;
    width: 300px;
    z-index: 5000;
    list-style:none;
    padding: 20px;
    display: flex;
    flex-direction:column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.4s ease-in;

    li {
        padding: 10px 0;
        //border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
    `