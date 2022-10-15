import styled from "styled-components";

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 3rem 1rem;
    width: 100%;
    max-width: 370px;
    border-radius: 4px;
    background-color: var(--grey-3);

    h3 {
        text-align: center;
        margin: auto;
        color: #fff;
    }

    label {
        color: #fff;
    }

    input {
        width: 100%;
        height: 45px;
        padding: 0 1rem;
        font-weight: 400;
        line-height: 26px;
        border: 1px solid transparent;
        border-radius: 4px;
        color: #fff;
        background-color: var(--grey-2);
    }

    input:focus {
        border: 1px solid #fff;
    }

    button {
        width: 100%;
        height: 45px;
        color: #fff;
        border-radius: 4px;
        background-color: var(--primary);
    }
`

export const FormPassword = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    svg {
        position: absolute;
        right: 16px;
        top: 15px;
        color: #fff;
    }
`

export const FormRegisterLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    span {
        color: var(--grey-1);
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
    }

    a {
        background-color: var(--grey-1);
        color: #fff;
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
    }
`