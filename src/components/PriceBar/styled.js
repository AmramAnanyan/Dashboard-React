import styled from "styled-components";

export const StyledPriceBar = styled.div`
        max-width: 96.5%;
        height: 120px;
        margin-left: 48px;
        display: flex;
        div{
                flex: 1;
                border-left: 0.2px solid gray;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: sans-serif;         
        }
       
        h1{
                font-size: 42px;
                font-weight:900;
        }
        @media only screen and (max-width: 480px) {
                display: flex;
                flex-direction: column;
               align-items: center;
                margin-bottom: 214px;
                div{
                        border: none;
                }
                span{
                        border-bottom:1px solid gray;
                }
    }
`;

export const StyledSpan = styled.span`
                display: flex;
                justify-content: center;
                align-items: center;
               
`;