import styled from "styled-components";

export const InputContainer = styled.div`
    width: 98.5%;
    height: 75px;
    background-color: #6a7dfe; 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    border-radius: 10px;

    input {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        text-align: right;
        padding: 0 15px;
        font-size: 28px;
        font-family: 'Roboto', sans-serif;
        color: #ffffff;
        outline: none;
        cursor: text;

       
        &::placeholder {
            color: rgba(255, 255, 255, 0.6);
        }
    }
`;
