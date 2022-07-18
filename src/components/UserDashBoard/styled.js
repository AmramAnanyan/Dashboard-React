import styled from "styled-components";

export const StyledUseerDashBoard = styled.div`
        margin-left: 48px;
        display: flex;
        div{
            flex: 1;
        }
        @media only screen and (max-width: 480px) {
                display: flex;
                flex-direction: column;
                margin-left: 0;
    }
`;