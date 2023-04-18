import styled from "styled-components";
import { convertPxToRem } from "../../Settings";

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .logo__Center {
    display: flex;
    justify-content: center;
    margin-bottom: ${convertPxToRem(20)};
  }
`;

export const LoginContainer = styled.div`
  width: 50%;
  max-width: ${convertPxToRem(400)};
  margin: 0 auto;
  .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 10.5px 14px;
  }
  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    width: 100%;
  }
`;

export const PositionImg = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0.5;
`;
