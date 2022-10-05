import styled from "styled-components";

export const PageNotFound = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    min-height: 100vh;
    background-color: var(--grey-4);

    h1 {
        font-size: 45px;
        font-weight: bold;
        color: #fff;
    }

    a {
        padding: 1rem 2rem;
        color: #fff;
        border-radius: 4px;
        background-color: mediumspringgreen;
    }
`
