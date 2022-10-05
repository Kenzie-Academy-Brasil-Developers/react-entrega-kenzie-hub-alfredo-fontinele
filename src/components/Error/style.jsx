import styled, { keyframes } from "styled-components";

export const ErrorAnime = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0%);
    }
`

export const Error = styled.div`
    animation: ${ErrorAnime} .7s ease-in-out;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    padding: .6rem 1rem;
    color: #fff;
    background-color: var(--fail);
    
    p {
        text-align: center;
    }
`