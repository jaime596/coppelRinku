import { Card, Form, Input } from "antd";

const NuevoMovimiento = () => (
  <Card >
    <Form>
      <Form.Item label="Número Empleado" name="noEmpleado">
        <Input></Input>
      </Form.Item>
      <Form.Item label="Nombre Empleado" name="nombreEmpleado">
        <Input></Input>
      </Form.Item>
      <Form.Item label="Rol" name="rol">
        <Input></Input>
      </Form.Item>
      <Form.Item label="Mes" name="mes">
        <Input></Input>
      </Form.Item>
      <Form.Item label="Cantidad de Entregas" name="cantidadEntregas">
        <Input></Input>
      </Form.Item>
    </Form>
  </Card>
);

export default NuevoMovimiento;
