import React from 'react'
import styled from 'styled-components'


const Section = ({title, description}) => {
    return (
        <Wrap>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        Custom Order
                    </LeftButton>
                    <RightButton>
                        Existing Inventory
                    </RightButton>

                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size: cover;
    background-repeat: no-repeat:
    background-position: center center;
    background-image:url("/images/model-s.jpg");
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align:center; 
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    text-transform:uppercase;
    font-size:12px;
    opacity:0.85;
    margin:8px;
    cursor:pointer;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color:black;
`

const DownArrow = styled.img`
    height:40px; 
    animation:animateDown infinite 1.5s;
    cursor: pointer;
`

const Buttons = styled.div`
`