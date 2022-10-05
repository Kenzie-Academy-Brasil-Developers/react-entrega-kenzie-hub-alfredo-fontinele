import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 3rem 1rem;
    width: 100%;
    min-height: 100vh;
`

export const FormTitle = styled.div`
    width: 100%;
    max-width: 370px;
    display: flex;
    justify-content: ${({ position }) => position};
    align-items: center;

    h2 {
        color: var(--primary);
    }

    a {
        font-weight: 600;
        font-size: 12px;
        line-height: 28px;
        color: #fff;
        padding: .3rem .7rem;
        border-radius: 4px;
        background-color: var(--grey-3);
    }
`