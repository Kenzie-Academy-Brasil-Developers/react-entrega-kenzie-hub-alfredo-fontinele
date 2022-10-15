import { AnyObject } from 'yup/lib/types'
import * as S from './style'

export const Error = ({ text }:AnyObject) => {
    return (
        <S.Error>
            <p>{text}</p>
        </S.Error>
    )
}