import styled from "styled-components";

export const StyledGraphicBar = styled.div`
        max-width: 96.5%;
        height: 240px;
        margin-left: 48px;
        background-color: gray;
        display: flex;

        .lineGraph{
            flex:4;
            border: 0.2px solid black;
        };
        .pieGraph{
            flex: 2;
            border: 0.2px solid black;
        };

        .worldMap{
            flex: 3;
            border: 0.2px solid black;
        }


`;