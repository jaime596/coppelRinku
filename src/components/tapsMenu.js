import { Col, Divider, Row, Tabs, Typography } from "antd";
import CalculoMensualContainer from "../container/calculoMensualContainer";
import MovimientosContainer from "../container/movimientosContainer";
const { Title } = Typography;

const TapsMenu = () => {
  const items = [
    {
      label: "Movimientos",
      key: "1",
      children: <MovimientosContainer />,
    },
    {
      label: "Cálculo Mensual",
      key: "2",
      children: <CalculoMensualContainer />,
    },
  ];

  return (
    <>
      <Row justify="center">
        <Col>
          <Title>Rinku</Title>
        </Col>
      </Row>
      <Row style={{ marginLeft: "20px", marginRight: "20px" }}>
        <Col span={24}>
          <Divider />
          <Tabs
            centered={true}
            items={items}
            destroyInactiveTabPane={true}
          ></Tabs>
        </Col>
      </Row>
    </>
  );
};

export default TapsMenu;
