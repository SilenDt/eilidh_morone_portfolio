import React from "react";
import image from '../images/salon_homepage.jpg'
import styled from "styled-components";

const PortfolioContainer = styled.div`
    border: solid black;
`

const Portfolio = () => {



    return (
        <PortfolioContainer>
        <h2>Projects:</h2>
        <img src={image} alt="project homepage"/>
        </PortfolioContainer>
    )
}

export default Portfolio