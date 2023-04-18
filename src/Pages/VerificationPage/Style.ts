import styled from 'styled-components'
import colors from '../../Styles/Color';
import { convertPxToRem } from '../../Settings';
const { grey3 } = colors
export default styled.div`
    width: 100%;
    background: white;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const RightContainerWhite = styled.div`
    background: ${grey3};
    padding: ${convertPxToRem(40)} ${convertPxToRem(60)};
    border-radius: ${convertPxToRem(9)};
    position: relative;
    box-shadow: 0 0 ${convertPxToRem(10)} grey;
    form{
        margin-top: ${convertPxToRem(10)};
    }
    .ant-btn{
        margin-bottom: ${convertPxToRem(5)};
    }
`