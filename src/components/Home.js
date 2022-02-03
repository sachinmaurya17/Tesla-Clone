import React from 'react';

import Section from './Section';
// this styled components help write code of css inside js file
import styled from 'styled-components';

function Home() {
  return (
    <Container>
       <Section
           tittle = "Model S"
           description = "Order online for Touchless devlivery"
           backgroundImg = "model-s.jpg"
           leftBtnText = "Custom order"
           rightBtnText = "Existing inventory"

       />

        <Section
           tittle = "Model Y"
           description = "Order online for Touchless devlivery"
           backgroundImg = "model-y.jpg"
           leftBtnText = "Custom order"
           rightBtnText = "Existing inventory"

       />

        <Section
           tittle = "Model 3"
           description = "Order online for Touchless devlivery"
           backgroundImg = "model-3.jpg"
           leftBtnText = "Custom order"
           rightBtnText = "Existing inventory"

       />

        <Section
           tittle = "Model X"
           description = "Order online for Touchless devlivery"
           backgroundImg = "model-x.jpg"
           leftBtnText = "Custom order"
           rightBtnText = "Existing inventory"

       />
       <Section
           tittle = "Lowest Cost Solar Panels in America"
           description = "Money-back guarntee"
           backgroundImg = "solar-panel.jpg"
           leftBtnText = "Order now"
           rightBtnText = "Learn more"

       />

        <Section
           tittle = "Solar for New Roofs"
           description = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
           backgroundImg = "solar-roof.jpg"
           leftBtnText = "Order now"
           rightBtnText = "Learn more"

       />

        <Section
           tittle = "Accessories"
           description = ""
           backgroundImg = "accessories.jpg"
           leftBtnText = "Shop now"
        />



       
    </Container>
  );
}

export default Home;

const Container = styled.div`
    height :100vh;
    
`
