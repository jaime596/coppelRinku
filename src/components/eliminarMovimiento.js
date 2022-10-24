import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";
import { AUXILIAR, CARGADOR, CHOFER } from "../data/vales";

const { Option } = Select;

const EliminarMovimiento = ({
  eliminarRegistro,
  empleados,
  empleadoSeleccionado,
  eliminarEmpleado,
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

  form.setFieldsValue({
    noEmpleado: eliminarEmpleado.noEmpleado,
    nombreEmpleado: eliminarEmpleado.empleado,
    rol: selecionarRol(eliminarEmpleado.rol),
    mes: eliminarEmpleado.mes,
    horasTrabajadas: eliminarEmpleado.horasTrabajadas,
    cantidadEntregas: eliminarEmpleado.cantidadEntregas,
  });

  return (
    <Form form={form} onFinish={(valores) => eliminarRegistro(valores)}>
      <Form.Item
        label="Número Empleado"
        name="noEmpleado"
        rules={[{ required: true, message: "Campo requerido" }]}
      >
        <Select
          disabled={true}
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
          disabled={true}
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
          disabled={true}
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
        label="Horas trabajadas"
        name="horasTrabajadas"
        rules={[{ required: true, message: "Campo requerido" }]}
      >
        <InputNumber
          disabled={true}
          max={192}
          min={0}
          style={{ width: "100%" }}
        ></InputNumber>
      </Form.Item>
      <Form.Item
        label="Cantidad de Entregas"
        name="cantidadEntregas"
        rules={[{ required: true, message: "Campo requerido" }]}
      >
        <Input disabled={true} type="number" autoComplete="off"></Input>
      </Form.Item>

      <Form.Item>
        <Row justify="end">
          <Col>
            <Button htmlType="submit" type="primary">
              Eliminar
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default EliminarMovimiento;
