import styled from "styled-components";

export const StyledUserBar = styled.div`
    width: 96%;
    height: 54px;
    background-color: #fff;
    margin-left: 4%;

    ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
    };
    .li1{
        flex: 6;
        display: flex;
        align-items: center;
        margin-left: 72px;
    }

    .li2{
        flex: 1;
        height: 54px;
        border-left: 1px solid #d4caca;
        border-right: 1px solid #d4caca ;
        display: flex;
        align-items: center;
    };

    .li3{
        flex: 3;
        display: flex;
        align-items: center;
    }
    .userImage{
        border-radius: 50%;
        margin-right: 10px;
        margin-left: 10px;
    }
   
`;
