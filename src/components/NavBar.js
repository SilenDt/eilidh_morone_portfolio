import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const NavBar = () => {

const NavUl = styled.ul`
    display: inline-flex;
    list-style-type: none;
`

const NavLi = styled.li`
    border: solid blue;
    border-radius: 10px;
    text-decoration: none;
    margin: 30px;
    padding: 30px;
`

    return (
        <NavUl>
            <NavLi>
                <Link to="/">Main</Link>
            </NavLi>
            <NavLi>
                <Link to="/about">About</Link>
            </NavLi>
            <NavLi>
                <Link to="/portfolio">Portfolio</Link>
            </NavLi>
            <NavLi>
                <Link to="/contact">Contact</Link>
            </NavLi>
        </NavUl>
    )
}

export default NavBar