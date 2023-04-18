import styled from "styled-components";
import { convertPxToRem } from "../../../Settings";

export default styled.div`
  display: flex;
  .ant-select-selection-item {
    display: flex;
    align-items: center;
  }
  .selectOptions {
    display: flex;
    align-items: center;
    .lazy-load-image-background {
      display: flex !important;
    }
    .selectTitle {
      font-size: ${convertPxToRem(16)};
      font-weight: 500;
      display: inline-block;
      margin-left: ${convertPxToRem(5)};
    }
    img {
      border-radius: 50%;
      width: ${convertPxToRem(20)};
      height: ${convertPxToRem(20)};
    }
  }
`;
