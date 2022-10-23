import { Button, Col, Form, Input, Row, Select } from "antd";
import { AUXILIAR, CARGADOR, CHOFER } from "../data/vales";

const { Option } = Select;

const NuevoMovimiento = ({
  nuevoRegistro,
  empleados,
  empleadoSeleccionado,
}) => {
  const [form] = Form.useForm();
  var empleado = {};

  const selecionarRol = (idRol) => {
    switch (idRol) {
      case 1:
        return CHOFER;
      case 2:
        return CARGADOR;
      case 3:
        return AUXILIAR;
      default:
        return "";
    }
  };

  return (
    <Form form={form} onFinish={(valores) => nuevoRegistro(valores)}>
      <Form.Item
        label="Número Empleado"
        name="noEmpleado"
        rules={[{ required: true, message: "Campo requerido" }]}
      >
        <Select
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
          onSelect={(elemento) => {
            empleadoSeleccionado(elemento);
            empleado = empleados.find((empleado) => empleado.id === elemento);
            form.setFieldsValue({
              rol: selecionarRol(empleado.rol),
              nombreEmpleado: empleado.empleado,
            });
          }}
        >
          {empleados.map((elemento) => (
            <Option value={elemento.id} key={elemento.id}>
              {elemento.id}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Nombre Empleado"
        name="nombreEmpleado"
        rules={[{ required: true, message: "Campo requerido" }]}
      >
        <Select
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
          onSelect={(elemento) => {
            empleadoSeleccionado(elemento);
            empleado = empleados.find(
              (empleado) => empleado.empleado === elemento
            );
            form.setFieldsValue({
              rol: empleado.rol,
              noEmpleado: empleado.id,
            });
          }}
        >
          {empleados.map((elemento) => (
            <Option value={elemento.empleado} key={elemento.id}>
              {elemento.empleado}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Rol" name="rol">
        <Input disabled={true}></Input>
      </Form.Item>
      <Form.Item
        label="Mes"
        name="mes"
        rules={[{ required: true, message: "Campo requerido" }]}
      >
        <Select
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          <Option value={1} key={1}>
            Enero
          </Option>
          <Option value={2} key={2}>
            Febrero
          </Option>
          <Option value={3} key={3}>
            Marzo
          </Option>
          <Option value={4} key={4}>
            Abril
          </Option>
          <Option value={5} key={5}>
            Mayo
          </Option>
          <Option value={6} key={6}>
            Junio
          </Option>
          <Option value={7} key={7}>
            Julio
          </Option>
          <Option value={8} key={8}>
            Agosto
          </Option>
          <Option value={9} key={9}>
            Septiembre
          </Option>
          <Option value={10} key={10}>
            Octubre
          </Option>
          <Option value={11} key={11}>
            Noviembre
          </Option>
          <Option value={12} key={12}>
            Diciembre
          </Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Cantidad de Entregas"
        name="cantidadEntregas"
        rules={[{ required: true, message: "Campo requerido" }]}
      >
        <Input type="number" autoComplete="off"></Input>
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

export default NuevoMovimiento;
