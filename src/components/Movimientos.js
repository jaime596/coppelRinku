import { Button, Col, Modal, Row, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Movimientos = ({
  loadTable,
  movimientos,
  onclickAgregar,
  abrirModal,
  nuevoMovimiento,
  onclickModificar,
  abrirModalModificar,
  modificarMovimiento,
  selectModificar,
  onclickEliminar,
  abrirModalEliminar,
  eliminarMovimiento,
  selectEliminar,
  onclickAgregarEmpleado,
  abrirAgregarEmpleado,
  agregarEmpleado,
}) => {
  const columnasTabla = () => [
    {
      key: "id",
      dataIndex: "id",
      title: "ID Movimiento",
    },
    {
      dataIndex: "noEmpleado",
      title: "No Empleado",
    },
    {
      dataIndex: "empleado",
      title: "Empleado ",
    },
    {
      dataIndex: "rol",
      title: "Rol ",
    },
    {
      dataIndex: "mes",
      title: "Mes ",
    },
    {
      dataIndex: "cantidadEntregas",
      title: "Cantidad de Entregas",
    },
    {
      title: "Editar",
      render: (text) => {
        return (
          <Button
            icon={<EditOutlined />}
            type="text"
            onClick={() => {
              console.log(text);
              selectModificar(text);
              onclickModificar();
            }}
          ></Button>
        );
      },
    },
    {
      title: "eliminar",
      render: (text) => {
        return (
          <Button
            icon={<DeleteOutlined />}
            type="text"
            onClick={() => {
              console.log(text);
              selectEliminar(text);
              onclickEliminar();
            }}
          ></Button>
        );
      },
    },
  ];

  return (
    <>
      <Row justify="center" gutter={[16, 16]} style={{ marginBottom: "10px" }}>
        <Col>
          <Button type="primary" onClick={() => onclickAgregar()}>
            Agregar Movimiento
          </Button>
        </Col>
        <Col>
          <Button type="primary" onClick={() => onclickAgregarEmpleado()}>
            Agregar Empleado
          </Button>
        </Col>
      </Row>

      <Row justify="center" gutter={[16, 16]}>
        <Col>
          <Table
            pagination={{
              position: ["bottomCenter", "bottomCenter"],
            }}
            loading={loadTable}
            columns={columnasTabla()}
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
      <Modal
        destroyOnClose={true}
        title="Modificar captura de movimientos por mes"
        open={abrirModalModificar}
        onCancel={() => {
          onclickModificar();
        }}
        footer={null}
      >
        {modificarMovimiento}
      </Modal>
      <Modal
        destroyOnClose={true}
        title="Eliminar captura de movimientos por mes"
        open={abrirModalEliminar}
        onCancel={() => {
          onclickEliminar();
        }}
        footer={null}
      >
        {eliminarMovimiento}
      </Modal>
      <Modal
        destroyOnClose={true}
        title="Agregar empleado"
        open={abrirAgregarEmpleado}
        onCancel={() => {
          onclickAgregarEmpleado();
        }}
        footer={null}
      >
        {agregarEmpleado}
      </Modal>
    </>
  );
};

export default Movimientos;
