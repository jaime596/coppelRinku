import { Col, Row, Table } from "antd";
import React from "react";
import { confTableCalculoMensual } from "../data/confTableCalculoMensual";

const CalculoMensual = ({ loadTable, calculosMes }) => {
  console.log(calculosMes);
  return (
    <Row>
      <Col span={24}>
        <Table
          pagination={{
            position: ["bottomCenter", "bottomCenter"],
          }}
          loading={loadTable}
          columns={confTableCalculoMensual}
          dataSource={calculosMes}
        />
      </Col>
    </Row>
  );
};

export default CalculoMensual;
