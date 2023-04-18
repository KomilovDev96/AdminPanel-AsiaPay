import styled from 'styled-components'
import { convertPxToRem } from '../../Settings'

export const H1 = styled.h1`
    font-weight: 600;
    font-size: ${convertPxToRem(20)};
    line-height:  ${convertPxToRem(27)};
`
export const H2 = styled.h2`
    font-weight: 600;
    font-size: ${convertPxToRem(18)};
    line-height:  ${convertPxToRem(27)};`

export const H3 = styled.h3`
   font-weight: 600;
    font-size: ${convertPxToRem(16)};
    line-height:  ${convertPxToRem(27)};
    `
export const P = styled.p`
   font-weight: 400;
    font-size: ${convertPxToRem(16)};
    line-height:  ${convertPxToRem(27)};
    `