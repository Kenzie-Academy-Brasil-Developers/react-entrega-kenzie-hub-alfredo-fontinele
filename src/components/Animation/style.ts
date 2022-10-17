import { keyframes } from "styled-components";

export const OpenModal = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0%);
    }
`
