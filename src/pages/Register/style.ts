import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormRegister = styled.form`
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

    input, 
    select {
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

    input:focus,
    select:focus {
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

export const FormRegisterTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    h3 {
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
`

export const BtnRegister = styled.button`
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: var(--primary-negative);
    color: #fff;
`