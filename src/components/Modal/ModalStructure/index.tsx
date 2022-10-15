import { ReactNode } from 'react'
import * as S from './style'

interface Layout {
    children: ReactNode
}

export const ModalStructure = ({ children }:Layout) => (
    <S.ModalContainer>{children}</S.ModalContainer>
)