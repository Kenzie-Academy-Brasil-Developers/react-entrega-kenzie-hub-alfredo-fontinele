import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`

export const HeaderTitle = styled.h3`
    color: var(--primary);
`

export const HeaderLogout = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .3rem 1rem;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    color: var(--grey-0);
    background-color: var(--grey-3);
    border-radius: 4px;
`

export const Line = styled.div`
    height: 2px;
    width: 100%;
    background-color: var(--grey-3);
`

export const HeaderMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: inherit;
    gap: 20px;
    width: 100%;
    max-width: 1300px;
    margin: auto;
`