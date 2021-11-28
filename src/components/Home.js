import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
    return (
        <Container>
            <Section title="Model S" description="Order Online for Touchless Delivery"/>
            <Section title="Model Y" description="Order Online for Touchless Delivery"/>
            <Section title="Model 3" description="Order Online for Touchless Delivery"/>
            <Section title="Model x" description="Order Online for Touchless Delivery"/>
        </Container>
    )
}

export default Home

const Container = styled.div`
height: 100vh;
`


