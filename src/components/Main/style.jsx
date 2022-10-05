import styled from "styled-components";

export const MainContainer = styled.main`
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    flex-direction: column;
    padding: 3rem 0;
    gap: 30px;
    color: var(--grey-0);

    h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: var(--grey-0);
    }

    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #fff;
    }
`

export const MainTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        background-color: var(--grey-3);
        padding: .7rem;
    }
`
