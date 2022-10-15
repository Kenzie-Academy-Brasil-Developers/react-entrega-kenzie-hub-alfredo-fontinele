import styled from "styled-components";

export const UserContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0;
    gap: 30px;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--grey-0);

    h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: var(--grey-0);
    }

    p {
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: var(--grey-1);
    }

    @media only screen and (max-width: 500px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
`