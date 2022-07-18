import styled from "styled-components";

export const StyledDashBoardPanel = styled.div`
        width: 100%;
        height: 36px;
        padding-left: 48px;
        display: flex;
        border-bottom: 0.5px solid #d4caca;
        border-top: 0.5px solid #d4caca;
        

        .bigDiv {
            flex: 7;
            background-color: #e6e2e2;
            display: flex;
           justify-content: start;
           align-items: center;
            
        };
        .smallDiv {
            flex: 2;
            background-color: #d4caca;
           display: flex;
           justify-content: center;
           align-items: center;
        }
        h3{
            color: gray;
            font-family: sans-serif;
            letter-spacing: 1px;
        }
        @media only screen and (max-width: 480px) {
                display: flex;
                flex-direction: column;
                border: none;
    }

`;