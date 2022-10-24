import { Button, Col, Form, Input, Row, Select } from "antd";
import React from "react";

const { Option } = Select;

const AgregarEmpleado = ({ nuevoRegistro }) => {
  return (
    <Form onFinish={(valores) => nuevoRegistro(valores)}>
      <Form.Item
        name="nombre"
        label="Nombre"
        rules={[{ required: true, message: "Campo requerido" }]}
      >
        <Input autoComplete="off"></Input>
      </Form.Item>
      <Form.Item
        name="rol"
        label="Rol"
        rules={[{ required: true, message: "Campo requerido" }]}
      >
        <Select>
          <Option value={1} key={1}>
            Chofer
          </Option>
          <Option value={2} key={2}>
            Cargador
          </Option>
          <Option value={3} key={3}>
            Auxiliar
          </Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Row justify="end">
          <Col>
            <Button htmlType="submit" type="primary">
              Guardar
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default AgregarEmpleado;
