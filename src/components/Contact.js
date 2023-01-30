import React from "react";
import styled from "styled-components";


const ContactContainer = styled.div`
    border: lightgrey;
    border-radius: 15px;
    background-color: lightblue;
    padding: 30px;
`
const HeaderStyle = styled.header`
    color: blue;
`

const Contact = () => {


    return (
        <ContactContainer>
            <HeaderStyle>
                <h2>Get In Touch</h2>
            </HeaderStyle>
                <h3>Phone Number: </h3>
                <h3>Email Address: </h3>
                <h3>LinkedIn: </h3>
        </ContactContainer>

    )
}

export default Contact