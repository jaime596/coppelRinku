import { Button, Col, Divider, Modal, Row, Table } from "antd";

import { columnsMovimientos } from "../data/confTableMovimientos";

const Movimientos = ({
  loadTable,
  movimientos,
  onclickAgregar,
  abrirModal,
  nuevoMovimiento,
}) => (
  <>
    <Row justify="center" gutter={[16, 16]}>
      <Col>
        <h1>Movimientos</h1>
      </Col>
    </Row>
    <Divider></Divider>

    <Row justify="center" gutter={[16, 16]} style={{marginBottom: "10px"}}>
      <Col>
        <Button type="primary" onClick={() => onclickAgregar()}>
          Agregar Movimiento
        </Button>
      </Col>
    </Row>

    <Row justify="center" gutter={[16, 16]}>
      <Col>
        <Table
          loading={loadTable}
          columns={columnsMovimientos}
          dataSource={movimientos}
        ></Table>
      </Col>
    </Row>
    <Modal
      destroyOnClose={true}
      title="Captura de movimientos por mes"
      open={abrirModal}
      onCancel={() => {
        onclickAgregar();
      }}
      footer={null}
    >
      {nuevoMovimiento}
    </Modal>
  </>
);

export default Movimientos;
