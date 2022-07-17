import styled from "styled-components";

export const StyledGraphicBottomBar = styled.div`
       
        height: 40px;
        display: flex;
        justify-content: space-between; 
        margin-left: 48px;
        background-color:${(props) => props.backColor || "#fff"};
        color: ${(props) => props.color || "#fff"};
        font-size: ${(props) => props.fontSize || "24px"};
        font-family: sans-serif;
        div{
            border-left: 0.2px solid gray;
            flex: 1;
        }
        
        
`;

