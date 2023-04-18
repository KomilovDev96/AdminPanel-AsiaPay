import { Row, Col } from "antd";
import React, { ReactElement } from "react";
import TrancStyled from "./Style";
export default function TransitionsPage(): ReactElement {
  return (
    <TrancStyled>
      <div>
        <button>Филтрация</button>
      </div>
      <div>
        <Row>
          <Col xl={6}></Col>
          <Col xl={6}></Col>
          <Col xl={6}></Col>
          <Col xl={6}></Col>
        </Row>
        <Row>
          <Col xl={4}>
            <button>Сбросить</button>
          </Col>
          <Col xl={6}>
            <button>Применить</button>
          </Col>
        </Row>
      </div>
    </TrancStyled>
  );
}
