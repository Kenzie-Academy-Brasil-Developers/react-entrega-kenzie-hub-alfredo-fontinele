import styled from "styled-components";

export const MainList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    gap: 20px;
    list-style: none;
    min-height: 280px;
    height: 280px;
    overflow-y: auto;
    border-radius: 4px;
    background-color: #212529;

    ::-webkit-scrollbar {
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: springgreen;
    }
`
