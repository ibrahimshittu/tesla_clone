import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
    const showArrow = true;
    
    return (
        <Container>
            <Section title="Model S" description="Order Online for Touchless Delivery" 
            backgroundImg="model-s.jpg" leftButtonText="Custom Order" 
            rightButtonText="Existing Inventory" showArrow={showArrow}/>
            <Section title="Model Y" description="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg" leftButtonText="Custom Order" 
            rightButtonText="Existing Inventory"/>
            <Section title="Model 3" description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg" leftButtonText="Custom Order" rightButtonText="Existing Inventory"/>
            <Section title="Model x" description="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg" leftButtonText="Custom Order" rightButtonText="Existing Inventory"/>
            <Section title="Solar Panels" description="Lowest Cost Solar Panels in Nigeria"
            backgroundImg="solar-panel.jpg" leftButtonText="order Now" rightButtonText="Learn More"/>
            <Section title="Solar Roof" description="Produce Clean Energy From Your Roof"
            backgroundImg="solar-roof.jpg" leftButtonText="order Now" rightButtonText="Learn More"/>
            <Section title="Accessories" description=""
            backgroundImg="accessories.jpg" leftButtonText="Shop Now"/>
        </Container>
    )
}

export default Home

const Container = styled.div`
height: 100vh;
`

