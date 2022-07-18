import styled from "styled-components";

export const StyledGraphicBar = styled.div`
        max-width: 96.5%;
        height: 288px;
        margin-left: 48px;
        display: flex;
        background-color: #282626;



        .lineGraph{
            flex:4;
           
        };
        .pieGraph{
            flex: 2;
           
        };

        .worldMap{
            flex: 3;
           background-color: inherit;
        }

       @media only screen and (max-width: 480px) {
            display: flex;
            flex-direction: column;
            margin-bottom: 440px;
    }
`;