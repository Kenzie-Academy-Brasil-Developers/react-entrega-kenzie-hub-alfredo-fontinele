import styled from "styled-components";
import { OpenModal } from "../../Animation/style";

export const ModalUser = styled.form`
    animation: ${OpenModal} 0.7s ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 370px;
    padding: 0 0 2rem;
    border-radius: 8px;
    background-color: var(--grey-3);
`

export const ModalTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: var(--grey-2);
    padding: 1rem;

    h3 {
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        color: var(--grey-0);
    }

    button {
        color: var(--grey-1);
        font-size: 18px;
        background-color: transparent;
    }
`

export const ModalDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 1rem;

    label {
        font-size: 13px;
        color: #fff;
    }

    input, select {
        width: 100%;
        min-height: 45px;
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
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    #btn__submit {
        width: 75%;
        height: 45px;
        color: #fff;
        border-radius: 4px;
        background-color: var(--primary-negative);
    }

    #btn__unsave {
        width: 25%;
        min-width: 70px;
        height: 45px;
        color: #fff;
        border-radius: 4px;
        background-color: var(--grey-1);
    }
`
