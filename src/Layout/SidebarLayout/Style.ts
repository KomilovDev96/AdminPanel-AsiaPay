import styled from "styled-components";
import { convertPxToRem } from "../../Settings";

export default styled.div`
  .bg__logo {
    padding: ${convertPxToRem(15)} ${convertPxToRem(10)};
  }
`;
