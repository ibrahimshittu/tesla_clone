import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


const Section = ({title, description, backgroundImg, leftButtonText, rightButtonText, showArrow }) => {
    return (
        <Wrap bgImage={backgroundImg} >
            <Fade bottom>
            
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftButtonText}
                        </LeftButton>
                        { rightButtonText && 
                        <RightButton>
                            {rightButtonText}
                        </RightButton> }

                    </ButtonGroup>
                    
                </Fade>
                {showArrow && <DownArrow src="/images/down-arrow.svg"/> }
            </Buttons>
            
            
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image:${props => `url("/images/${props.bgImage}");`}
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    
    position: sticky;
    top: 0;
    
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align:center; 

    h1{
        font-size:40px;
    }
    p{
        padding: 10px;
    }
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