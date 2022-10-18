import { ReactNode } from 'react'
import * as S from './style'
import { ILayout } from './../../../context/validation';

export const ModalStructure = ({ children }:ILayout) => (
    <S.ModalContainer>{children}</S.ModalContainer>
)