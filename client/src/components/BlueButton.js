import React from "react";
import { withRouter } from 'react-router-dom';
import styled from "styled-components";

function BlueButton(props) {
    return (
        <Button width={props.width} negative={props.negative} onClick={props.onClick}>
        {props.children}
        </Button>
    );
}
export default withRouter(BlueButton);

const Button = styled.button`
    width: ${props => props.width || "calc(80% + 30px)"};
    width : -webkit-${props => props.width || "calc(80% + 30px)"};
    width :    -moz-${props => props.width || "calc(80% + 30px)"};
    max-width:${props => props.width || "530px"};
    height: ${props => props.width || "50px"};
    border: none;
    padding: 15px;
    border-radius: 5px;

    background-color: #1949D8;
    color: #ffffff;

    font-weight: bold;
    font-size:1em;

    cursor: pointer;

    &:hover {
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    }

    &:active {
        opacity: 0.6;
    }
`