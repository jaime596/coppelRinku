import { message } from "antd";
import axios from "axios";
import React, { Component } from "react";
import AgregarEmpleado from "../components/agregarEmpleado";
import { Empleados } from "../routes";

export default class AgregarEmpleadoContainer extends Component {
  
  nuevoRegistro = (valores) => {
    const data = {
      empleado: valores.nombre,
      rol: valores.rol,
    };

    axios
      .post(Empleados, data)
      .then((respuesta) => {
        if (respuesta.status === 201) {
          message.success("Empleado agregado!");
          this.props.getEmpleados();
          this.props.onclickAgregarEmpleado();
        }
        console.log(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return <AgregarEmpleado nuevoRegistro={this.nuevoRegistro} />;
  }
}
