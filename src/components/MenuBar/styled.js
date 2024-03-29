import styled from "styled-components";

export const StyledMenuBar = styled.div`
    width: 48px;
    height: 848px;
    background-image:linear-gradient(to bottom, grey,#171717);
    position: absolute;
    top: 24.2px;
    .div1{
        width: inherit;
        height: 50%;
        background-color: #282626;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .div2{
        width: inherit;
        height: 50%;
        background-color: #171717;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 8px;
        
    }
    @media only screen and (max-width: 480px) {
       width: 44px;
       height: 1200px;
    }
    @media screen and (max-width:900px){
        width: 46px;
        height: 1280px;
    }
`;

export const StyledImageIcone = styled.img`
    src: ${(props) => props.src};
    width: 36px;
    height: 36px;
    cursor: pointer;
    margin-top: ${(props) => props.padding || "0"};
    border-bottom: ${(props)=>props.border||"none"};
`;

export const MenuLogo = styled.h1`
    border: 10px solid red;
    padding: 4px;
    font-weight: bold;
    color: #fff;
    background-color: black;
`;
