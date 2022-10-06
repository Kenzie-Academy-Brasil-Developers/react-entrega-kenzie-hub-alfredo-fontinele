import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --primary: #FF577F;
        --primary-hover: #FF427F;
        --primary-negative: #59323F;
        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;  
        --success: #3FE864;
        --fail: #E83F5B;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }

    body {
        min-height: 100vh;
        background-color: var(--grey-4);
    }

    body::-webkit-scrollbar {
        background-color: var(--grey-4);
    }

    body::-webkit-scrollbar-thumb {
        width: 15px;
        background-color: var(--primary);
    }

    button, svg {
        cursor: pointer;
    }
`