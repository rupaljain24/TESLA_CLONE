import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"

            />
          <Section
                title="Model x"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"

            />

            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
            />
          
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
            />

            <Section
                title="Solar Panels"
                description="Order Online for Touchless Delivery"
                backgroundImg="solar-panel.jpg"
            />

            <Section
                title="Solar Roofs"
                description="Order Online for Touchless Delivery"
                backgroundImg="solar-roof.jpg"
            />

            <Section
                title="Accessories"
                description="Order Online for Touchless Delivery"
                backgroundImg="accessories.jpg"
            />
        </Container>
    )
}
export default Home

const Container = styled.div`
height:100vh;
`