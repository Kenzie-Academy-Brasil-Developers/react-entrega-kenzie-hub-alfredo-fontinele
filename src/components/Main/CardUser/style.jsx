import styled from "styled-components"

export const Card = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    padding: 1rem 1.2rem;
    border-radius: 4px;
    background-color: #121214;

    h2 {
        font-weight: 700;
        font-size: 1rem;
        line-height: 24px;
        color: var(--grey-0);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
    }
`