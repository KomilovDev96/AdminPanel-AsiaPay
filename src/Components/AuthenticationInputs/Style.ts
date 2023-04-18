import styled from "styled-components";
import colors from "../../Styles/Color";
import { convertHexToRgba, convertPxToRem } from "../../Settings";

const { white, grey, black, primary, red, primary_light } = colors;

interface Props {
  error: boolean;
}

export default styled.div<Props>`
  margin-bottom: ${convertPxToRem(15)};
  .vi__wrapper {
    .vi {
      border: none;
      background-color: transparent;
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
      }
    }
    .vi__container {
      gap: 0;
      height: fit-content;
      width: fit-content;
      z-index: 1;
      position: relative;
      .vi__character {
        height: ${convertPxToRem(40)};
        width: ${convertPxToRem(40)};
        background-color: ${white};
        border-radius: ${convertPxToRem(10)};
        border: 1px solid ${(props) => (props.error ? red : grey)};
        font-size: 20px;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${black} !important;
        transition: 500ms;
        &:not(:last-child) {
          margin-right: ${convertPxToRem(13)};
        }
        &--selected {
          border-color: ${(props) => (props.error ? red : primary)};
          outline: none;
          background-color: ${(props) =>
            convertHexToRgba(props.error ? red : primary_light, 0.1)};
        }
      }
    }
  }
  .error-text {
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color: ${red};
    margin-top: ${convertPxToRem(8)};
    display: inline-block;
    text-align: center;
  }
`;
