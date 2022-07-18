import styled from "styled-components";

export const StyledDashboard = styled.div`
    max-width: 100%;
    min-height: 600px;
    border-bottom: 1px solid;
    margin: 24px;
    @media only screen and (max-width: 480px) {
            display: flex;
            flex-direction: column;
            width: 100%;
            border: none;
            margin: 1px;
            min-height: 2400px;
    }
   
`;